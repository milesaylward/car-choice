<template>
  <div class="carousel-interface row">
    <div class="carousel-interface__dots">
      <button class="dot" v-for="(_item, index) in items" :key="index" :class="{ active: index === activeIndex }"
        @click="emit('dotClick', index)"
      />
    </div>
    <div class="carousel-interface__buttons">
      <CcButton 
        class="prev"
        type="outline"
        icon="arrow_forward"
        :icon-only="true"
        :disabled="activeIndex === 0"
        @click="emit('arrowClick', -1)"
      />
      <CcButton
        icon="arrow_forward"
        :icon-only="true"
        :disabled="activeIndex === items.length - 1"
        type="outline"
        @click="emit('arrowClick', 1)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  activeIndex: { type: Number, required: true },
  items: { type: Array, required: true }
});
const emit = defineEmits(['dotClick', 'arrowClick']);
</script>

<style lang="scss">
.carousel-interface {
  justify-content: space-between;
  margin-top: 24px;
  &__dots {
    display: flex;
    margin-left: -4px;
    align-items: center;
    .dot {
      padding: 4px;
      display: block;
      position: relative;
      border: none;
      background: none;
      &.active {
        pointer-events: none;
        &::after {
          background: $imperial-red;
        }
      }
      &::after {
        content: '';
        display: block;
        width: 8px;
        height: 8px;
        background: rgba($ghost-white, 0.5);
        transition: background 300ms $authenticMotion, transform 300ms $authenticMotion;
        border-radius: 50%;
      }
      @include onHover {
        &::after {
          transform: scale(1.05);
          background: $imperial-red;
        }
      }
    }
  }
  &__buttons {
    display: flex;
    .button {
      &.prev {
        margin-right: 16px;
        transform: rotate(180deg);
      }
    }
  }
}
</style>