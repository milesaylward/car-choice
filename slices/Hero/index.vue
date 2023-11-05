<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    :class="[
      'hero',
      isCarousel ? 'hero--carousel' : ''
    ]"
    :style="heroStyle"
  >
    <div
      v-for="(item, index) in slice.items"
      :class="['hero__item ap-parent', { hide: activeIndex !== index, visible: appearIndex === index }]"
      :key="index"
      v-appear="{ css: false }"
      ref="heroSlide"
      :style="heroStyle"
    >
      <PrismicImage
        :field="item.image"
        class="hero__item__image"
        :style="backgroundStyle"
      />
      <div class="hero__item__overlay" />
      <div class="hero__item__content container" ref="heroContent">
        <h1 class="display-2 ap-child">
          {{ item.headline_text }}
        </h1>
        <h3 class="subtitle ap-child ap-child--1">{{ item.subtitle_text }}</h3>
        <p class="body ap-child ap-child--2">{{ item.body_text }}</p>
        <span class="ap-child ap-child--3" v-if="item.button_text">
          <CcButton :label="item.button_text" :field="item.button_link" />
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Content } from "@prismicio/client";
import { useUIStore } from "@store/uiStore";
import { storeToRefs } from "pinia";

const props = defineProps(getSliceComponentProps<Content.HeroSlice>(["slice", "index", "slices", "context"]));
const { showLoader, scrollPos, viewWidth } = storeToRefs(useUIStore());

const isCarousel = computed(() => props.slice.items.length > 1);
const activeIndex = ref(0);
const appearIndex = ref<number | null>(null);
const heroSlide = ref();
const heroContent = ref();
const minHeight = ref(0);
let slideInterval: NodeJS.Timer;

const backgroundStyle = computed(() => ({
  transform: `scale(1.2) translateY(${scrollPos.value * 0.1}px)`
}));
const heroStyle = computed(() => ({
  minHeight: `${minHeight.value + 228}px`
}))

const changeSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % props.slice.items.length;
  setTimeout(() => {
    handleAnimSlide();
  }, 450);
};

const handleAnimSlide = () => {
  appearIndex.value = activeIndex.value;
  if (!slideInterval && isCarousel.value) slideInterval = setInterval(changeSlide, 10000);
};

const setSize = () => {
  heroContent.value.forEach((slide: HTMLElement) => {
    if (slide.clientHeight > minHeight.value) {
      minHeight.value = slide.clientHeight;
    }
  });
}

watch(viewWidth, setSize);
watch(showLoader, () => {
  handleAnimSlide();
});

onMounted(() => {
  if (!showLoader.value) handleAnimSlide();
  setTimeout(() => { setSize(); }, 500);
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
    height: 100%;
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
      background: rgba(black, 0.65);
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
      display: block;
      h1 {
        text-transform: uppercase;
        @include bpMedium {
          max-width: 800px;
          text-wrap: balance;
        }
      }
      .subtitle {
        margin-top: 16px;
      }
      p {
        max-width: 800px;
        margin: 16px 0 0;
        @include bpMedium {
          text-wrap: balance;
        }
      }
      .button {
        margin-top: 32px;
      }
    }
  }
}
</style>