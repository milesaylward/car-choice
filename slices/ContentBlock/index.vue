<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="content-block"
  >
  <div class="container" v-appear>
    <div class="row">
      <div class="col-12 col-md-6 col-lg-6 copy-col">
        <p class="display-6 ap-child">{{ main_text }}</p>
        <p class="body ap-child ap-child--1">{{ sub_text }}</p>
        <ul class="content-block__list ap-child ap-child--2">
          <li v-for="item in items">
            <CheckIcon v-if="!useWrench" />
            <span class="material-symbols-outlined" v-else>construction</span>
            <PrismicRichText :field="item.list_item" class="body-small" />
          </li>
        </ul>
        <span class="button-wrapper ap-child ap-child--3">
          <CcButton :label="button_label" :field="button_link" type="outline" />
        </span>
      </div>
      <div class="col-12 col-md-6">
        <div class="image-grid" v-if="useGrid">
          <PrismicImage :field="main_image" class="top ap-child ap-child--4 ap-fade" />
          <PrismicImage :field="sub_image_1" class="ap-child ap-child--5 ap-fade" />
          <PrismicImage :field="sub_image_2" class="ap-child ap-child--6 ap-fade" />
        </div>
        <PrismicImage :field="main_image" class="top ap-child ap-child--4 ap-fade single-image" v-else />
      </div>
    </div>
  </div>
  </section>
</template>

<script setup lang="ts">
import { Content } from "@prismicio/client";
import CheckIcon from '@/assets/svg/check.svg?component';

const props = defineProps(
  getSliceComponentProps<Content.ContentBlockSlice>(["slice", "index", "slices", "context"])
);
const {
  primary: {
    main_text,
    sub_text,
    main_image,
    sub_image_1,
    sub_image_2,
    button_label, 
    button_link,
  },
  items,
} = props.slice;

const route = useRoute();
const useWrench = computed(() => route.name === 'services-uid');
const useGrid = computed(() => main_image.url && sub_image_1.url && sub_image_2.url);


</script>

<style lang="scss">
.content-block {
  padding: 48px 0;
  @include bpMedium {
    padding: 80px 0;
  }
  .display-6 {
    margin-top: 0;
  }

  .copy-col {
    @include bpMedium {
      padding-right: 40px;
    }
    @include bpLarge {
      padding-right: 80px;
    }
  }

  .button-wrapper {
    display: inline-block;
    margin-top: 32px;
  }
  &__list {
    list-style: none;
    padding: 0;
    li {
      display: flex;
      align-items: flex-start;
      margin: 12px 0;
      p {
        margin: 0;
      }
      svg, .material-symbols-outlined {
        width: 16px;
        margin-right: 20px;
        fill: $imperial-red;
      }
      .material-symbols-outlined {
        width: auto;
        color: $imperial-red;
        font-size: 20px;
      }
    }
  }
  .single-image {
    margin-top: 32px;
    @include bpMedium { margin-top: 0; }
  }

  .image-grid {
    margin-top: 32px;
    @include bpMedium { margin-top: 0; }
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: 1fr 0.5fr; 
    gap: 16px 16px; 
    grid-template-areas: 
      "Top Top"
      ". ."; 
    .top {
      grid-area: Top;
    }
    img {
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>