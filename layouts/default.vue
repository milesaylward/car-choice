<template>
  <div class="page">
    <slot></slot>
  </div>
</template>

<script setup>
</script>

<style lang="scss">
@import '~/styles/scaffold';
.page {
  background: $platinum;
  min-height: 100vh;
}

</style>