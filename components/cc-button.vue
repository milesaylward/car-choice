<template>
  <PrismicLink
    :field="field"
    class="button"
    v-if="prismic && field"
    :class="[type && `button--${type}`]"
  > 
    <span class="button__content" v-if="!iconOnly">{{ label }}</span>
    <span class="icon material-symbols-outlined" v-if="icon">{{ icon }}</span>
  </PrismicLink>
  <button
    class="button"
    :class="classes"
    v-else
  >
    <span class="button__content" v-if="!iconOnly">{{ label }}</span>
    <span class="icon material-symbols-outlined" v-if="icon">{{ icon }}</span>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  prismic: {
    type: Boolean,
    default: true
  },
  label: {
    type: String,
  },
  iconOnly: {
    default: false,
  },
  icon: {
    type: String,
  },
  field: {
    type: null,
  },
  type: {
    type: String,
  }
});

const classes = computed(() => ([
  props.type && `button--${props.type}`,
  props.iconOnly && 'button--icon-only'
]))

</script>

<style lang="scss">
.button {
  padding: 14px 28px;
  background: $imperial-red;
  color: white;
  text-decoration: none;
  font-family: $chakra;
  font-weight: 600;
  text-transform: uppercase;
  transition: 300ms $authenticMotion;
  border: 1px solid $imperial-red;
  cursor: pointer;
  clip-path: polygon(0 0, calc(100% - 20px) 0%, 100% 20px, 100% 100%, 20px 100%, 0% calc(100% - 20px));
  &__content, .icon {
    position: relative;
    z-index: 2;
  }
  &[disabled] {
    opacity: 0.5;
    pointer-events: none;
  }
  @include onHover {
    background: transparent;
    clip-path: polygon(0 0, 100% 0%, 100% 0, 100% 100%, 0 100%, 0% 100%);
  }
  &--outline {
    background: rgba($imperial-red, 0);
    border: 1px solid $ghost-white;
    position: relative;
    overflow: hidden;
    display: inline-block;
    clip-path: none;
    &::before {
      content: '';
      background: $imperial-red;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      z-index: 1;
      transform-origin: right center;
      transition: transform 300ms $authenticMotion;
      transform: scaleX(0);
    }
    @include onHover {
      background: rgba($imperial-red, 0);
      border-color: $imperial-red;
      &::before {
        transform-origin: left center;
        transform: scaleX(1);
      }
    }
  }
  &--icon-only {
    padding: 0;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>