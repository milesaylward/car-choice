<template>
  <footer class="footer">
    <div class="container footer__content">
      <div class="row justify-between">
        <div class="col-3">
          <NuxtLink to="/" class="footer__logo">
            <img :src="Logo" />
          </NuxtLink>
          <PrismicRichText :field="contact_info" class="footer__rich-text" />
        </div>
        <div class="col-6 flex">
          <div class="footer-column" v-for="column in link_columns">
            <p class="subtitle">
              {{ column.label }}
            </p>
            <ul class="footer-column-list">
              <li v-for="link in column.links">
                <PrismicLink
                  :field="link.primary.link"
                  class="link"
                >
                {{ link.primary.link_label }}
                </PrismicLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  <div class="legal">
      <div class="container">
        <div class="row">
          <p class="legal">Copyrights © 2023 Car Choice Service. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
  import { useContentStore } from '~/core/store/contentStore';

  const { getOptions } = useContentStore();
  const { contact_info, columns } = getOptions('footer');
  import Logo from '@/assets/images/logo.png';
  const link_columns = columns.map((col: any) => (
    { label: col.label, links: col.links }
  ));
  
</script>

<style lang="scss">
.footer {
  background: #121212;
  padding: 80px 0 0;
  border-top: 1px solid $ghost-white;
  &__logo {
    width: 300px;
    display: flex;
    flex-shrink: 0;
    img {
      width: 100%;
    }
  }
  &__content {
    &.container {
      padding-bottom: 80px;
    }
  }
  .body-small {
    text-wrap: balance;
  }
  &__rich-text {
    margin-top: 16px;
    strong {
      font-size: 16px;
      color: $xanthous;
      font-weight: 600;
      text-underline-offset: 4px;
    }
    p {
      margin: 0;
      &:first-of-type { margin-bottom: 16px;}
      a {
        @include inlineLink;
        display: inline-block;
        padding-top: 0;
        margin: 0;
      }
    }
  }

  .subtitle {
    margin: 0;
    font-size: 16px;
    color: $xanthous;
    font-weight: 600;
    text-underline-offset: 4px;
  }
  .footer-column {
    margin: 0 32px;
  }

  .footer-column-list {
    margin-top: 32px;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-rows: repeat(4, auto);
    grid-gap: 16px 40px;
    grid-auto-flow: column;
    .link {
      margin: 0;
      font-size: 14px;
    }
  }

  .legal {
    background: $night; 
  }


}
</style>