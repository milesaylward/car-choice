<template>
  <main id="app" ref="wrapper">
    <SliceZone wrapper="div" :slices="page?.data.slices ?? []" :components="components" />
    <div class="google-map">
      <iframe width="100%" height="450" frameborder="0" style="border:0" referrerpolicy="no-referrer-when-downgrade"
        :src="`https://www.google.com/maps/embed/v1/place?key=${maps_key}&q=place_id:ChIJ0dgIs5WVuokRpCHlsUBQgyA`"
        allowfullscreen>
      </iframe>
    </div>
  </main>
</template>


        
<script setup lang="ts">
import { components } from '~/slices'
import { useUIStore } from '@store/uiStore';
import { storeToRefs } from 'pinia';

const prismic = usePrismic()
const { public: { maps_key } } = useRuntimeConfig();
const { data: page } = await useAsyncData('index', () => prismic.client.getByUID('page', 'home'));
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}
const uiStore = useUIStore();
const { showLoader } = storeToRefs(uiStore);
const wrapper = ref();

watch(showLoader, () => {
  setTimeout(() => { wrapper.value?.classList.add('mounted'); }, 500);
});
useHead({
  title: 'Car Choice Service - Home'
});


onMounted(() => {
  setTimeout(() => {
    uiStore.setPageLoaded(true);
  }, 1000);
  setTimeout(() => {
    wrapper.value?.classList.add('mounted');
  }, 500);
});
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  .google-map {
    display: flex;
    width: 100%;
  }
}
</style>


