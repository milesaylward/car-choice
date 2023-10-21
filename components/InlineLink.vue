<template>
  <NuxtLink to="/" class="link">
    {{ label }}
  </NuxtLink>
</template>


<script setup>
defineProps({
  label: {
    type: String,
    required: true
  }
});
</script>

<style lang="scss">
.link {
  font-family: $chakra;
  font-weight: 600;
  color: $ghost-white;
  text-decoration: none;
  margin: 0 20px;
  padding: 8px 0;
  font-size: 16px;
  position: relative;
  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 1px;
    bottom: 6px;
    background-color: $ghost-white;
    left: 0;
    transform-origin: left center;
    transition: transform 300ms $authenticMotion;
    transform: scaleX(0);
  }
  @include onHover {
    &::after {
      transform: scaleX(1);
    }
  }
}
</style>