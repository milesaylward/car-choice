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
  @include inlineLink;
}
</style>