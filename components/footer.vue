<template>
  <footer class="footer">
    <div class="container footer__content">
      <div class="row justify-between">
        <div class="col-12 col-md-4">
          <NuxtLink to="/" class="footer__logo">
            <img :src="Logo" />
          </NuxtLink>
          <PrismicRichText :field="contact_info" class="footer__rich-text" />
        </div>
        <div class="col-12 col-md-8 flex">
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
          <p class="legal">Copyright © 2023 Car Choice Service. All rights reserved.</p>
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
  border-top: 1px solid $ghost-white;
  width: 100%;
  overflow: hidden;
  padding: 40px 0 0;
  @include bpMedium {
    padding: 80px 0 0;
  }
  &__logo {
    width: 220px;
    display: flex;
    flex-shrink: 0;
    margin-bottom: 16px;
    @include bpMedium {
      margin-bottom: 0px;
    }
    @include bpLarge {
      width: 300px;
    }
    img {
      width: 100%;
    }
  }
  &__content {
    &.container {
      padding-bottom: 40px;
      @include bpMedium {
        padding-bottom: 80px;
      }
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
  .flex {
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  .subtitle {
    margin: 0;
    font-size: 16px;
    color: $xanthous;
    font-weight: 600;
    text-underline-offset: 4px;
  }
  .footer-column {
    width: 100%;
    margin: 24px 0 0;
    @include bpMedium {
      width: auto;
      margin: 24px 16px 0;
      margin: 0 32px;
      &:first-of-type { margin-left: 0; }
    }
  }

  .footer-column-list {
    margin-top: 16px;
    max-height: 140px;
    flex-wrap: wrap;
    @include bpMedium {
      margin-top: 32px;
    }
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 16px 40px;
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