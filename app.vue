<template>
  <div class="page">
    <Header />
    <NuxtPage />
    <Footer />
    <Transition name="fade">
      <Loader v-if="showLoader" />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { useUIStore } from '@store/uiStore';
import { useContentStore } from '@store/contentStore';
import { storeToRefs } from 'pinia';

const uiStore = useUIStore();
const { setScrollPosition } = uiStore;
const { checkOptions } = useContentStore();
const { showLoader } = storeToRefs(uiStore);
await checkOptions();

const handleScroll = () => {
  setScrollPosition(window.scrollY);
};

const handleTouch = () => {
  document.body.classList.add('touch');
  document.removeEventListener('touchstart', handleTouch);
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', uiStore.setViewPortSize);
  document.addEventListener('touchstart', handleTouch);
  uiStore.setViewPortSize();
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style lang="scss">
@import './styles/scaffold';
.page {
  background: $night;
  &-enter-active,
  &-leave-active {
    transition: all 0.4s;
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
    filter: blur(1rem);
  }
}

</style>