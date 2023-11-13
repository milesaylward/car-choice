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
import { useUIStore } from '@/core/store/uiStore';

const prismic = usePrismic()
const route = useRoute()
const uiStore = useUIStore();
const { public: { maps_key } } = useRuntimeConfig();
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
    wrapper.value?.classList.add('mounted');
  }, 1000);
});
const { meta_title, meta_description, og_image } = page.value.data;
useHead({ title: meta_title || `Car Choice Service - ${prismic.asText(page.value?.data.title)}` });
useSeoMeta({
  description: meta_description,
  ogDescription: meta_description,
  ogImage: og_image.url || '/og-image.jpg',
})
</script>

