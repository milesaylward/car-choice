<template>
  <SliceZone
    wrapper="main"
    id="app"
    ref="wrapper"
    :slices="page?.data.slices ?? []"
    :components="components"
  />
</template>

<script setup lang="ts">
import { components } from '~/slices'
import { useUIStore } from '@store/uiStore';

const prismic = usePrismic()
const { data: page } = await useAsyncData('index', () => prismic.client.getByUID('page', 'home'));
const uiStore = useUIStore();
const wrapper = ref();
uiStore.setPageLoaded(true);

console.log(page.value, 'in home');

onMounted(() => {
  console.log(page, 'in home');
  setTimeout(() => {
    wrapper.value?.$el.classList.add('mounted');
  }, 1000);
});
useHead({
  title: prismic.asText(page.value?.data.title)
})
</script>


