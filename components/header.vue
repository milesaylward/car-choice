<template>
  <nav class="header" :class="{ filled: scrollPos > 5 || menuOpen, 'kill-anim': resizing }">
    <div class="container">
      <div class="row">
        <NuxtLink to="/" class="header__logo">
          <img :src="Logo" />
        </NuxtLink>
        <div class="header__menu" :class="{ open: menuOpen }">
          <SliceZone
            wrapper="div"
            class="links"
            :slices="slices ?? []"
            :components="components"
          />
          <div class="header__button">
            <CcButton :label="button.label" :field="button.link" />
          </div>
        </div>
        <button class="hamburger" :class="{ active: menuOpen }" @click="menuOpen = !menuOpen;">
          <div class="hamburger-box">
            <div class="hamburger-inner"></div>
          </div>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import Logo from '@/assets/images/logo.png';
import { components } from '@/slices'
import { useContentStore } from '@store/contentStore';
import { useUIStore } from '@store/uiStore';
import { storeToRefs } from 'pinia';
const router = useRouter();
let resizeTmo: NodeJS.Timeout;

const { getOptions } = useContentStore();
const uiStore = useUIStore();
const { scrollPos, viewWidth } = storeToRefs(uiStore);
const { slices, button } = getOptions('header');
const menuOpen = ref(false);
const resizing = ref(false);
watch(viewWidth, () => {
  resizing.value = true;
  resizeTmo = setTimeout(() => {
    resizing.value = false;
  }, 100);
});
router.beforeEach(() => {
  menuOpen.value = false;
});
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
  &.kill-anim {
    .header__menu {
      transition: none;
    }
  }
  &.filled {
    background: $night;
    border-color: $ghost-white;
  }
  .row {
    align-items: center;
    position: static;
    height: $headerHeight;
    @include bpLarge {
      flex-wrap: nowrap;
      height: $headerHeightDesktop;
    }
  }
  &__logo {
    width: 50%;
    max-width: 300px;
    flex-shrink: 0;
    display: flex;
    @include bpLarge {
      width: 20%;
    }
    img {
      width: 100%;
    }
  }
  &__menu {
    display: flex;
    position: absolute;
    flex-direction: column;
    align-items: flex-start;
    top: $headerHeight;
    width: 100vw;
    left: 0;
    background: $night;
    padding: 24px;
    height: 100vh;
    transition: transform 300ms $authenticMotion;
    transform: translateX(100%);
    &.open {
      transform: translateX(0%);
    }
    .links {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      @include bpLarge {
        flex-direction: row;
        margin-left: auto;
      }
      .link {
        margin: 0;
        &.router-link-exact-active {
          pointer-events: none;
          &::after {
            transform: scaleX(1);
          }
        }
        @include bpLarge {
          margin: 0 12px;
        }
      }
    }
    @include bpLarge {
      background: none;
      position: static;
      flex-direction: row;
      transform: translateX(0%);
      width: 100%;
      justify-content: center;
      align-items: center;
      padding: 0;
      height: auto;
    }
  }
  &__button {
    flex-shrink: 0;
    display: flex;
    justify-content: flex-end;
    margin-top: 32px;
    @include bpLarge {
      margin-top: 0;
      margin-left: auto;
    }
  }

  .hamburger {
    @include bpLarge {
      display: none;
    }
    font: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: visible;
    margin: 0;
    padding: 15px;
    cursor: pointer;
    transition-timing-function: linear;
    transition-duration: .15s;
    transition-property: opacity,filter;
    text-transform: none;
    color: inherit;
    border: 0;
    background-color: transparent;
    margin-left: auto;
    .hamburger-box {
      position: relative;
      display: inline-block;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 24px;
      .hamburger-inner, .hamburger-inner::after, .hamburger-inner::before {
        position: absolute;
        width: 32px;
        height: 2px;
        transition-timing-function: ease;
        transition-duration: .15s;
        transition-property: transform;
        background-color: #fff;
      }
      .hamburger-inner {
        transition-timing-function: cubic-bezier(.55,.055,.675,.19);
        transition-duration: .22s;
        &::before, &::after {
          display: block;
          content: "";
        }
      }
      .hamburger-inner::before {
        top: -8px;
        transition: top .1s ease-in .25s,opacity .1s ease-in;
      }
      .hamburger-inner::after {
        bottom: -8px;
        transition: bottom .1s ease-in .25s,transform .22s cubic-bezier(.55,.055,.675,.19);
      }
    }
    &.active {
      .hamburger-inner {
        transition-delay: .12s;
        transition-timing-function: cubic-bezier(.215,.61,.355,1);
        transform: rotate(225deg);
        &::before {
          top: 0;
          transition: top .1s ease-out,opacity .1s ease-out .12s;
          opacity: 0;
        }
        &::after {
          bottom: 0;
          transition: bottom .1s ease-out,transform .22s cubic-bezier(.215,.61,.355,1) .12s;
          transform: rotate(-90deg);
        }
      }
    }
  }
}
</style>