<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="cards-section"
  >
    <div class="container">
      <div class="row justify-between align-end" v-appear>
        <div class="col-12 col-md-6 ap-child">
          <h5 class="display-5">{{ headline }}</h5>
        </div>
        <span class="ap-child ap-child--1">
          <CcButton :label="button_label" :field="button_link" type="outline" />
        </span>
      </div>
      <div class="row cards-section__row" v-appear="{ threshold: 0.1 }" v-if="isDefault">
        <div
          class="col-12 col-md-6 col-lg-4"
          v-for="(card, index) in default_items"
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
                <div class="card__copy__price justify-between" v-if="isDefault">
                  <p><span class="label">Time:</span> {{ card.card_time }}</p>
                  <p><span class="label">Price:</span> {{ card.card_price }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row cards-section__row" v-appear="{ threshold: 0.1 }" v-else>
        <div
          class="col-12 col-md-6 col-lg-4"
          v-for="(card, index) in coupon_items"
          :class="['ap-child', `ap-child--${index}`]"
        >
          <div class="card">
            <div class="card__content">
              <div class="particles">
                <div v-for="index in 10" :class="`dot-wrapper dot-wrapper-${index}`"><div :class="`dot dot-${index}`"></div></div>
              </div>
              <div class="card__overlay coupon"></div>
              <div class="card__copy">
                <div class="discount">
                  <h5 class="subtitle subtitle-discount">{{ card.card_discout }}</h5>
                  <h5 class="subtitle">{{ card.card_title }}</h5>
                </div>
                <PrismicRichText class="body" :field="card.card_body" />
                <hr>
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
import { type CardsSectionSliceCouponCardsItem, CardsSectionSliceDefaultItem } from '@/prismicio-types';

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

const isDefault = computed(() => props.slice.variation === 'default');

const default_items = computed(() => items as Array<CardsSectionSliceDefaultItem>);
const coupon_items = computed(() => items as Array<CardsSectionSliceCouponCardsItem>);


</script>

<style lang="scss">

.cards-section {
  padding: 40px 0;
  @include bpMedium {
    padding: 100px 0;
  }
  h5 {
    text-transform: uppercase;
    margin-bottom: 24px;
    @include bpMedium {
      margin-bottom: 0;
      text-wrap: balance;
    }
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
      .card__overlay:not(.coupon) {
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
      height: 100%;
      .particles {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
        z-index: 2;
        .dot-wrapper {
          position: absolute;
          z-index: 1;
          .dot {
            width: 5px;
            height: 5px;
            background: $imperial-red;
            border-radius: 50%;
          }
        }
        @include Particles;
      }
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
      &.coupon {
        z-index: 1;
        opacity: 1;
      }
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
      .discount {
        display: flex;
        align-items: center;
        .subtitle {
          &-discount {
            background: $imperial-red;
            padding: 12px;
            margin-right: 16px;
          }
        }
      }
      hr {
        opacity: 0.5;
        width: 100%;
        margin: auto 0 16px;
        border: none;
        border-bottom: 1px solid $ghost-white;
      }
      .body {
        font-size: 16px;
        margin-bottom: 24px;
        p {
          margin-bottom: 0;
          a {
            @include inlineLink;
            margin: 0;
            font-family: $openSans;
            font-weight: bold;
            font-size: 16px;
            letter-spacing: initial;
          }
        }
      }
      &__price {
        display: flex;
        p {
          margin: 0;
          font-weight: bold;
          font-family: $bebas;
          color: $xanthous;
          font-size: 18px;
          letter-spacing: 1px;
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