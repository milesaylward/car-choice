<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="testimonial-carousel"
  >
    <Carousel v-appear>
      <div class="testimonial" v-for="item in items">
        <p class="body-large">“{{ item.quote }}”</p>
        <hr>
        <p class="body">{{ item.name }}</p>
      </div>
    </Carousel>
  </section>
</template>

<script setup lang="ts">
import { Content } from "@prismicio/client";

const props = defineProps(
  getSliceComponentProps<Content.TestimonialCarouselSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);

const { items } = props.slice;

</script>

<style lang="scss">
.testimonial-carousel {
  padding: 48px 0;
  overflow: hidden;
  @include bpMedium {
    padding: 80px 0;
  }
  .testimonial {
    width: 100%;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @include bpLarge {
      padding: 0 120px;
    }
    hr {
      width: 120px;
    }
    p {
      text-wrap: balance;
      text-align: center;
    }
  }
}
</style>