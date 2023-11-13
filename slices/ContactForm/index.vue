<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="contact-form"
  >
    <div class="container" v-appear>
      <div class="row">
        <div class="col-12 col-md-8 col-lg-7">
          <h6 class="display-5 ap-child">{{ title }}</h6>
          <p class="body ap-child ap-child--1">{{ body }}</p>
        </div>
        <form @submit="handleSubmit" ref="form" class="ap-child ap-child--2">
          <FormInput name="first_name" :value="formData.first_name" label="First Name" @change="handleFormChange" />
          <FormInput name="last_name" :value="formData.last_name" label="Last Name" @change="handleFormChange" />
          <FormInput name="email" type="email" :value="formData.email" label="Email" @change="handleFormChange" />
          <FormInput name="phone" type="phone" :value="formData.phone" label="Phone" @change="handleFormChange" />
          <FormInput name="date" type="date" :value="formData.date" label="Date" @change="handleFormChange" />
          <FormInput name="time" type="select" :value="formData.time" label="Preferred Time" @change="handleFormChange" :options="timeOptions" />
          <FormInput name="service" type="select" :value="formData.service" label="Service Type" @change="handleFormChange" :options="serviceOptions" />
          <FormInput name="vin" :value="formData.vin" label="Vin Number" @change="handleFormChange" />
          <FormInput size="small" name="year" type="number" :value="formData.year" label="Year" @change="handleFormChange" />
          <FormInput size="small" name="make" type="select" :value="formData.make" label="Make" @change="handleFormChange" :options="makeOptions" />
          <FormInput size="small" name="model" type="select" :value="formData.model" label="Model" @change="handleFormChange" :options="modelOptions" />
          <FormInput name="message" :required="false" type="text-area" size="large" :value="formData.message" label="Additional Information" @change="handleFormChange" />
          <div class="col-12">
            <small>This site is protected by reCAPTCHA and the Google 
              <a class="link" target="_blank" href="https://policies.google.com/privacy">Privacy Policy</a> and
              <a class="link" target="_blank" href="https://policies.google.com/terms">Terms of Service</a> apply.
            </small>
          </div>
          <small class="error-copy" :class="{ visible: showError }">Please fill out or correct the highlighted fields.</small>
          <p class="success-copy" :class="{ visible: showSuccess }">We have recieved your appointment request and will reach out as soon as possible.</p>
          <CcButton
            label="Submit"
            @click="handleSubmit"
            type="outline"
          />
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Content } from "@prismicio/client";
import type * as PrismicTypes from "@prismicio/client";

const prismic = usePrismic()
const props = defineProps(getSliceComponentProps<Content.ContactFormSlice>(["slice", "index", "slices", "context"]));
const { data: types } = await useAsyncData(
  'service-types',
  () => prismic.client.getSingle('service_types')
);

const { public: { recaptcha_key } } = useRuntimeConfig();
const yearRegex = new RegExp(/^\d{4}$/);

const serviceOptions = computed(() => {
  const out: Array<PrismicTypes.KeyTextField> = [];
  if (types.value) { 
    const { slices } = types.value.data;
    slices.forEach(slice => { out.push(slice.primary.name); });
  }
  return out;
});
const timeOptions = computed(() => {
  const dt = new Date(1970, 0, 1, 6);
  const rc = [];
  while (dt.getDate() === 1 && (dt.getHours() < 18 || (dt.getHours() == 18 && dt.getMinutes() === 0))) {
    rc.push(dt.toLocaleTimeString('en-US', { timeStyle: 'short' }));
    dt.setMinutes(dt.getMinutes() + 30);
  }
  return rc;
});

const makeOptions = ref<Array<string>>([]);
const modelOptions = ref<Array<string>>([]);

const { primary: { title, body } } = props.slice;

const form = ref();
const showError = ref(false);
const showSuccess = ref(false);
const cleanFormData = {
  first_name: '',
  last_name: '',
  date: '',
  time: '',
  service: '',
  message: '',
  vin: '',
  phone: '',
  email: '',
  year: '',
  make: '',
  model: '',
};
const formData = ref<{ [key: string]: any}>({ ...cleanFormData });

watch(() => formData.value.year, (val) => {
  if (yearRegex.test(val)) fetchMakes();
});

watch(() => formData.value.make, (val) => {
  if (val) fetchModels();
});

watch(formData.value, () => {
  showError.value = false;
}, { deep: true });

const fetchMakes = async () => {
  const { data } = await useFetch(`/api/get-makes?year=${formData.value.year}`);
  if (data.value) {
    makeOptions.value = data.value.makes.map((make) => make.make_display);
  }
}

const fetchModels = async () => {
  const { data } = await useFetch(`/api/get-models?year=${formData.value.year}&make=${formData.value.make}`);
  if (data.value) {
    modelOptions.value = data.value.models.map((model) => model.model_name);
  }
}

const formSuccess = () => {
  showSuccess.value = true;
  formData.value = cleanFormData;
}

const handleSubmit = async (e: Event) => {
  e.preventDefault();
  if (form.value.checkValidity()) {
    grecaptcha.ready(function() {
      grecaptcha.execute(recaptcha_key, { action: 'submit' }).then(async (token) => {
        const res = await $fetch('/api/validate', { method: 'POST', body: { token }});
        if (res.success) {
          await $fetch('/api/submit', { method: 'POST', body: { ...formData.value }});
          formSuccess();
        }
      });
    });
  } else {
    const invalid = form.value.querySelectorAll(':invalid');
    invalid.forEach((el: HTMLElement) => {
      el.parentElement?.classList.add('error');
    });
    showError.value = true;
  }
}

const handleFormChange = ({ value, name }: { value: string; name: string; }) => {
  formData.value[name] = value;
}
</script>

<style lang="scss">
.contact-form {
  overflow: hidden;
  padding: 48px 0;
  @include bpMedium {
    padding: 80px 0;
  }

  form {
    display: flex;
    flex-wrap: wrap;
    margin: 24px -24px 0;
    position: relative;
    @include bpMedium {
      margin-top: 48px;
    }
    .button {
      margin: 0 24px;
    }
    .error-copy, .success-copy {
      position: absolute;
      bottom: 20px;
      left: 0;
      color: lighten($imperial-red, 10%);
      font-size: 14px;
      margin-top: 0;
      opacity: 0;
      transform: translateY(40%);
      transition: opacity 300ms $authenticMotion;
      &.visible {
        opacity: 1;
      }
    }
    .success-copy {
      padding: 0 24px;
      margin: 12px 0 48px;
      color: $ghost-white;
      transform: translateY(0%);
    }
    small {
      display: block;
      padding: 0 24px;
      margin: 12px 0 64px;
      font-size: 12px;
      .link {
        padding: 0;
        margin: 0;
        font-size: 12px;
        font-family: $openSans;
        &::after {
          bottom: 0;
        }
      }
    }
    .text-area {
      margin-bottom: 0;
    }
  }
}
</style>