<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="callout-banner"
    v-appear
  >
  <img class="callout-banner__bg" role="presentation" :src="TireBg" />
    <div class="container">
      <div class="row">
        <div
          v-for="(item, index) in items"
          class="banner-item col-6 col-md-3 ap-child"
          :class="`ap-child--${index}`"
        >
          <h6 class="display-6">
            {{ item.stat_number }}
          </h6>
          <p class="body">{{ item.stat_text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Content } from "@prismicio/client";
import TireBg from '@/assets/images/tire-bg.jpg';
const props = defineProps(
  getSliceComponentProps<Content.CalloutBannerSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);

const { items } = props.slice;
</script>
<style lang="scss">

.callout-banner {
  padding: 40px 0;
  position: relative;
  overflow: hidden;
  @include bpMedium {
    padding: 80px 0;
  }
  &__bg {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: left;
  }
  .banner-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    margin: 12px 0;
    h6 {
      color: rgba($ghost-white, 0.6);
    }
    p {
      font-weight: 600;
      max-width: 160px;
      text-align: center;
      text-wrap: balance;
    }
  }
}
</style>
