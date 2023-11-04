<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="contact-form"
  >
    <div class="container" v-appear>
      <div class="row">
        <div class="col-12 col-md-8 col-lg-7">
          <h6 class="display-6 ap-child">{{ title }}</h6>
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
          <FormInput name="message" :required="false" type="text-area" :fullWidth="true" :value="formData.message" label="Additional Information" @change="handleFormChange" />
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

const { primary: { title, body } } = props.slice;

const form = ref();
const formData = ref<{ [key: string]: any}>({
  first_name: '',
  last_name: '',
  date: '',
  time: '',
  service: '',
  message: '',
  vin: '',
  phone: '',
  email: '',
});

const handleSubmit = async (e: Event) => {
  e.preventDefault();
  if (form.value.checkValidity()) {
    grecaptcha.ready(function() {
      grecaptcha.execute(recaptcha_key, { action: 'submit' }).then(async (token) => {
        // const res = await $fetch('/api/validate', { method: 'POST', body: { token }});
        const submit = await $fetch('/api/submit', { method: 'POST', body: { ...formData.value }});
      });
    });
  } else {
    const invalid = form.value.querySelectorAll(':invalid');
    console.log(invalid);
  }
}

const handleFormChange = ({ value, name }: { value: string; name: string; }) => {
  formData.value[name] = value;
}
</script>

<style lang="scss">
.contact-form {
  padding: 48px 0;
  @include bpMedium {
    padding: 80px 0;
  }

  form {
    display: flex;
    flex-wrap: wrap;
    margin: 48px -24px 0;
    .button {
      margin: 0 24px;
    }
  }
}
</style>