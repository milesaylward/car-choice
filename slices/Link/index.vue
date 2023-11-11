<template>
  <PrismicLink :field="slice.primary.link" class="link">
    {{ slice.primary.link_label }}
  </PrismicLink>
</template>


<script setup lang="ts">
import { Content } from "@prismicio/client";
defineProps(
  getSliceComponentProps<Content.HeaderLinkSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>
<style lang="scss">
.link {
  font-family: $openSans;
  font-weight: 600;
  color: $ghost-white;
  text-decoration: none;
  margin: 0 20px;
  padding: 8px 0;
  font-size: 16px;
  position: relative;
  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 1px;
    bottom: 6px;
    background-color: $ghost-white;
    left: 0;
    transform-origin: left center;
    transition: transform 300ms $authenticMotion;
    transform: scaleX(0);
  }
  @include onHover {
    &::after {
      transform: scaleX(1);
    }
  }
}
</style>