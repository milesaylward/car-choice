<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    :class="[
      'hero',
      isCarousel ? 'hero--carousel' : ''
    ]"
  >
    <div
      v-for="(item, index) in slice.items"
      :class="['hero__item ap-parent', { hide: activeIndex !== index, visible: appearIndex === index }]"
      v-appear="{ css: false }"
      :key="index"
      ref="heroSlide"
    >
      <PrismicImage :field="item.image" class="hero__item__image" />
      <div class="hero__item__overlay" />
      <div class="hero__item__content container">
        <h1 class="text-center display-2 ap-child">
          {{ item.headline_text }}
        </h1>
        <h3 class="text-center subtitle ap-child ap-child--1">{{ item.subtitle_text }}</h3>
        <p class="text-center ap-child ap-child--2">{{ item.body_text }}</p>
        <span class="ap-child ap-child--3" v-if="item.button_text">
          <PrismicLink :field="item.button_link" class="button button--outline">
            {{ item.button_text }}
          </PrismicLink>
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Content } from "@prismicio/client";
import { useUIStore } from "@store/uiStore";

const props = defineProps(getSliceComponentProps<Content.HeroSlice>(["slice", "index", "slices", "context"]));
const uiStore = useUIStore();

const isCarousel = computed(() => props.slice.items.length > 1);
const activeIndex = ref(0);
const appearIndex = ref(0);
const heroSlide = ref();
let slideInterval: NodeJS.Timer;

const changeSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % props.slice.items.length;
  setTimeout(() => {
    handleAnimSlide();
  }, 450);
};

const handleAnimSlide = () => {
  appearIndex.value = activeIndex.value;
  if (!slideInterval && isCarousel.value) slideInterval = setInterval(changeSlide, 6000);
};



onMounted(() => {
  console.log(uiStore.pageLoaded);
  if (uiStore.pageLoaded) handleAnimSlide();
});
</script>


<style lang="scss">
.hero {
  display: flex;
  width: 100%;
  position: relative;
  overflow: hidden;
  &__item {
    max-height: 80vh;
    width: 100%;
    display: flex;
    flex-shrink: 0;
    position: absolute;
    transition: opacity 450ms $authenticMotion;
    &:first-of-type {
      position: static;
    }
    &.hide {
      opacity: 0;
    }
    &__overlay {
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 100%;
      background: rgba(black, 0.35);
    }
    &__image {
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
    &__content {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 2;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      color: white;
      align-items: center;
      h1 {
        text-wrap: balance;
        text-transform: uppercase;
      }
      .subtitle {
        margin-top: 16px;
      }
      p {
        text-wrap: balance;
        max-width: 800px;
        margin: 16px auto 0;
      }
      .button {
        margin-top: 32px;
      }
    }
  }
}
</style>