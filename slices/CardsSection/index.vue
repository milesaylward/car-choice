<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="cards-section"
  >
    <div class="container">
      <div class="row justify-between align-end" v-appear>
        <div class="col-6 ap-child">
          <h5 class="display-6">{{ headline }}</h5>
        </div>
        <span class="ap-child ap-child--1">
          <CcButton :label="button_label" :field="button_link" type="outline" />
        </span>
      </div>
      <div class="row cards-section__row" v-appear="{ threshold: 0.5 }">
        <div
          class="col-12 col-md-6 col-lg-4"
          v-for="(card, index) in items"
          :class="['ap-child', `ap-child--${index}`]"
        >
          <div class="card">
            <div class="card__content">
              <div class="card__overlay"></div>
              <div class="card__image">
                <PrismicImage :field="card.card_image" class="card__image__image" />
              </div>
              <div class="card__copy">
                <h5 class="subtitle">{{ card.card_title }}</h5>
                <p class="body">{{ card.card_body }}</p>
                <hr>
                <div class="card__copy__price justify-between">
                  <p><span class="label">Time:</span> {{ card.card_time }}</p>
                  <p><span class="label">Price:</span> {{ card.card_price }}</p>
                </div>
              </div>
            </div>
          </div>
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
  getSliceComponentProps<Content.CardsSectionSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
const {
  primary: {
    button_label,
    button_link,
    headline,
  },
  items,
} = props.slice;


</script>

<style lang="scss">
.cards-section {
  padding: 100px 0;
  h5 {
    text-transform: uppercase;
  }
  &__row {
    margin: 36px -12px;
  }

  .card {
    display: flex;
    flex-direction: column;
    padding: 12px;
    height: 100%;
    cursor: pointer;
    @include onHover {
      .card__overlay {
        opacity: 0.8;
      }
      .card__content::before {
        transform: scaleY(1);
      }
    }
    &__content {
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      &::before {
        content: '';
        height: 3px;
        background: $imperial-red;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 4;
        transition: transform 300ms $authenticMotion;
        transform-origin: top center;
        transform: scaleY(0);
      }
    }
    &__overlay {
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      background: #121212;
      width: 100%;
      height: 100%;
      transition: opacity 300ms $authenticMotion;
    }
    &__copy {
      position: relative;
      width: 100%;
      height: 100%;
      padding: 40px;
      z-index: 3;
      display: flex;
      flex-direction: column;
      top: 0;
      left: 0;
      hr {
        opacity: 0.5;
        width: 100%;
        margin: 16px 0;
        border: none;
        border-bottom: 1px solid $ghost-white;
      }
      .body {
        font-size: 16px;
      }
      &__price {
        display: flex;
        p {
          margin: 0;
          font-weight: bold;
          font-family: $chakra;
          color: $xanthous;
          .label {
            font-weight: normal;
            color: $ghost-white;
          }
        }
      }
    }
    &__image {
      display: flex;
      position: absolute;
      z-index: 1;
      &__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>