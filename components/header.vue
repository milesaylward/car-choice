<template>
  <nav class="header" :class="{ filled: scrollPos > 5 }">
    <div class="container">
      <div class="row">
        <NuxtLink to="/" class="header__logo">
          <img :src="Logo" />
        </NuxtLink>
        <SliceZone
          wrapper="div"
          class="header__menu col-12"
          :slices="slices ?? []"
          :components="components"
        />
        <div class="header__button">
          <CcButton :label="button.label" :field="button.link" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import Logo from '@/assets/images/logo.png';
import { components } from '@/slices'
import { useContentStore } from '@store/contentStore';
import { useUIStore } from '@store/uiStore';
import { storeToRefs } from 'pinia';

const { getOptions } = useContentStore();
const uiStore = useUIStore();
const { scrollPos } = storeToRefs(uiStore);
const { slices, button } = getOptions('header');
</script>

<style lang="scss">
.header {
  position: fixed;
  top: 0;
  width: 100%;
  left: 0;
  z-index: 100;
  padding: 16px 0;
  border-bottom: 1px solid rgba($ghost-white, 0);
  background: rgba(black, 0);
  transition: all 300ms $authenticMotion;
  &.filled {
    background: $night;
    border-color: $ghost-white;
  }
  .row {
    align-items: center;
    height: $headerHeight;
    @include bpLarge {
      flex-wrap: nowrap;
    }
  }
  &__logo {
    width: 20%;
    max-width: 300px;
    flex-shrink: 0;
    display: flex;
    img {
      width: 100%;
    }
  }
  &__menu {
    display: flex;
    justify-content: center;
  }
  &__button {
    flex-shrink: 0;
    display: flex;
    justify-content: flex-end;
  }
}
</style>