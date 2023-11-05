<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="two-up"
    v-appear="{
      threshold: 0.5,
      onAppear: handleAppear,
      onReappear: handleAppear,
      onLeave: handleLeave,
    }"
  >
    <div class="container">
      <div class="row align-center">
        <div class="col-12 col-md-6 ap-child">
          <div class="two-up__lottie" v-if="lottie && lottie.url">
            <ClientOnly>
              <Vue3Lottie
                :animationLink="lottie.url" 
                :autoPlay="false"
                ref="lottieEl"
              />
            </ClientOnly>
          </div>
        </div>  
        <div class="col-12 col-md-5 col-md-offset-1 two-up__copy">
          <h5 class="eyebrow ap-child ap-child--1">{{ eyebrow }}</h5>
          <h5 class="display-6 ap-child ap-child--2">{{ headline }}</h5>
          <p class="body ap-child ap-child--3">{{ body_text }}</p>
        </div>  
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const props = defineProps(
  getSliceComponentProps<Content.TwoUpSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
const { primary: {
  eyebrow,
  headline,
  body_text,
  animation,
} } = props.slice;
const lottie = animation as any;
const lottieEl = ref();

const handleAppear = () => {
  if (lottieEl.value) lottieEl.value.play();
}

const handleLeave = () => {
  if (lottieEl.value) lottieEl.value.pause();
}

</script>

<style lang="scss">
.two-up {
  padding: 40px 0;
  @include bpMedium {
    padding: 100px 0;
  }
  &__copy {
    @include bpMedium {
      padding-left: 40px;
    }
    .eyebrow {
      margin-bottom: 16px;
      color: $xanthous;
    }
    h5 {
      text-wrap: balance;
    }
  }

}
</style>
