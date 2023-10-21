<template>
  <div class="loader">
    <ClientOnly>
      <div class="lottie">
        <Vue3Lottie
          :animationData="Loader" 
        />
      </div>
      <h5 class="text-center display-6">
        Loading
      </h5>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import Loader from '@/assets/lottie/loader.json';
</script>

<style lang="scss">
.loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: $night;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: $ghost-white;
  .lottie {
    display: flex;
    max-width: 400px;
    height: 200px;
  }
}
</style>