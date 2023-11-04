<template>
  <div class="carousel">
    <div class="container">
      <div
        class="carousel__wrapper row ap-child"
        ref="wrapper"
        :class="{ animating: slideAnimating }"
        @mousedown="handleDragStart"
        @touchstart="handleDragStart"
      >
        <div
          class="carousel__slider"
          ref="slider"
          :class="{ dragging }"
          :style="sliderStyle"
        >
         <slot></slot>
        </div>
      </div>
      <CarouselInterface
        class="ap-child ap-child--1"
        :active-index="activeIndex"
        :items="items"
        @dot-click="handleClick"
        @arrow-click="handleInc"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUIStore } from '~/core/store/uiStore';

const { pageTransitonComplete } = storeToRefs(useUIStore());
const slider = ref();
const wrapper = ref();
const activeIndex = ref(0);
const sliderTransform = ref(0);
const dragging = ref(false);
const slideAnimating = ref(false);
let slideWidth = 0;
let startX = 0;
let wrapperLeft = 0;
let dragDistance = 0;
let resizeTmo: NodeJS.Timeout;
const DRAG_THRESHOLD = 100;

const sliderStyle = computed(() => ({ transform: `translateX(${sliderTransform.value}px)` }));
const items = computed(() => slider.value ? Array.from(slider.value.children) : []);

const updateSize = () => {
  clearTimeout(resizeTmo);
  const rect = wrapper.value.getBoundingClientRect();
  wrapperLeft = rect.left;
  if (activeIndex.value) {
    dragging.value = true;
    sliderTransform.value = -(slideWidth * activeIndex.value);
    resizeTmo = setTimeout(() => { dragging.value = false; }, 50);
  }
  console.log(slider.value.children[0].clientWidth);
  slideWidth = slider.value.children[0].getBoundingClientRect().width;
}

const animateSlide = () => {
  slideAnimating.value = true;
  sliderTransform.value = -(slideWidth * activeIndex.value);
  setTimeout(() => { slideAnimating.value = false; }, 600);
}

const handleClick = (idx: number) => {
  activeIndex.value = idx;
  animateSlide();
}

const handleInc = (inc: number) => {
  activeIndex.value += inc;
  animateSlide();
}

const handleDragStart = (e: MouseEvent | TouchEvent) => {
  dragging.value = true;
  if (e instanceof MouseEvent) {
    startX = e.screenX;
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleDragEnd);
  } else {
    startX = e.touches[0].clientX;
    document.addEventListener('touchmove', handleMove);
    document.addEventListener('touchend', handleDragEnd);
  }
}

const handleMove = (e: MouseEvent | TouchEvent) => {
  let pos = 0;
  let nextVal = 0;
  if (e instanceof MouseEvent) pos = e.screenX;
  else pos = e.touches[0].clientX;
  nextVal = sliderTransform.value - (startX - pos);
  if (nextVal < 0 && nextVal > -((items.value.length - 1) * slideWidth)) {
    sliderTransform.value = nextVal;
    dragDistance -= startX - pos;
  }
  startX = pos;
}

const handleDragEnd = () => {
  dragging.value = false;
  document.removeEventListener('mousemove', handleMove);
  if (Math.abs(dragDistance) > DRAG_THRESHOLD) {
    const inc = dragDistance < 0 ? 1 : -1;
    activeIndex.value += inc;
  }
  if (dragDistance) {
    animateSlide();
    dragDistance = 0;
  }
}

watch(pageTransitonComplete, updateSize);

onMounted(() => {
  setTimeout(() => { updateSize(); }, 500);
});
onBeforeUnmount(() => {
  document.removeEventListener('mousemove', handleMove);
  document.removeEventListener('mouseup', handleDragEnd);
  document.removeEventListener('touchmove', handleMove);
  document.removeEventListener('touchend', handleDragEnd);
});
</script>

<style lang="scss">
.carousel {
  overflow: hidden;
  .container {
    display: block;
  }
  &__wrapper {
    display: flex;
    flex-shrink: 0;
    overflow: hidden;
    cursor: grab;
    justify-content: center;
    user-select: none;
    padding: 0;
    &.animating {
      pointer-events: none;
    }
  }
  &__slider {
    display: flex;
    flex-shrink: 0;
    width: 100%;
    align-items: stretch;
    transition: transform 600ms $authenticMotion;
    @include media-query(md) {
      width: 100%;
    }
    &.dragging {
      transition: none;
    }
  }
}
</style>