<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="service-cards"
  >
    <div class="container">
      <div class="row">
        <div class="service-cards__cards" v-appear>
          <PrismicLink
            v-for="(item, index) in items"
            class="service-cards__cards__card col-12 col-md-6 col-lg-4 ap-child"
            :class="`ap-child--${index}`"
            :field="item.service_link"
          >
            <PrismicImage :field="item.icon" class="card-icon" />
            <h6 class="display-6">{{ item.service_name }}</h6>
            <p class="body-small">{{ item.body_text }}</p>
            <p class="card-link">
              Service Details
              <Arrow />
            </p>
          </PrismicLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Content } from "@prismicio/client";
import Arrow from '@/assets/svg/arrow.svg';

const props = defineProps(
  getSliceComponentProps<Content.ServiceCardsSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
const { items } = props.slice;
</script>

<style lang="scss">
.service-cards {
  padding: 48px 0 0;
  @include bpMedium {
    padding: 80px 0 32px;
  }
  &__cards {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -24px;
    &__card {
      text-decoration: none;
      color: $ghost-white;
      padding: 48px 24px;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      @include onHover {
        &::after { transform: translateX(-50%) scaleX(1); }
        .card-link {
          background-position: 0 100%;
          svg {
            transform: translateX(8px);
          }
        }
      }
      &::before, &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        width: calc(100% - 48px);
        height: 2px;
        background: rgba($ghost-white, 0.3);
        transform: translateX(-50%);
        transition: transform 300ms $authenticMotion;
        transform-origin: center;
      }
      &::after {
        background: $imperial-red;
        transform: translateX(-50%) scaleX(0);
      }
      .card-icon {
        max-width: 80px;
        margin-bottom: 12px;
      }
      .body-small {
        margin-bottom: 20px;
      }
      .card-link {
        display: inline-block;
        margin-top: auto;
        margin-bottom: 0;
        font-family: $chakra;
        font-weight: 600;
        -webkit-text-fill-color: transparent;
        color: $ghost-white;
        text-decoration: none;
        font-size: 18px;
        position: relative;
        background: linear-gradient(to right, $imperial-red, $imperial-red 50%, $ghost-white 50%);
        background-size: 200% 100%;
        background-position: 100%;
        pointer-events: none;
        background-clip: text;
        transition: background-position 300ms $authenticMotion;
        display: flex;
        align-items: center;
        svg {
          width: 24px;
          margin-left: 12px;
          fill: $ghost-white;
          transition: transform 300ms $authenticMotion;
        }
      }
    }
  }
}
</style>
