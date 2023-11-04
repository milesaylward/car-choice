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
const { data: page } = await useAsyncData(
  `[service_page-uid-${route.params.uid}]`,
  () => prismic.client.getByUID("service_page", route.params.uid as string)
);

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
useHead({
  title: `Car Choice Service - ${page.value?.data.title}`,
  meta: [
    {
      name: "description",
      content: page.value?.data.meta_description,
    },
  ],
});
</script>

