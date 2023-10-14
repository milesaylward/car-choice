<template>
  <SliceZone
    wrapper="main"
    ref="wrapper"
    id="app"
    :slices="page?.data.slices ?? []"
    :components="components"
  />
</template>

<script setup lang="ts">
import { components } from '~/slices'
import { useUIStore } from '@/core/store/uiStore';

const prismic = usePrismic()
const route = useRoute()
const uiStore = useUIStore();
const { data: page } = await useAsyncData(route.params.uid as string, () =>
  prismic.client.getByUID('page', route.params.uid as string)
)
const wrapper = ref();

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}


onMounted(() => {
  uiStore.setPageLoaded(true);
  setTimeout(() => {
    wrapper.value?.$el.classList.add('mounted');
  }, 1000);
});
useHead({
  title: prismic.asText(page.value?.data.title)
})
</script>

