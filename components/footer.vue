<template>
  <footer class="footer">
    <div class="container footer__content">
      <div class="row justify-between">
        <div class="col-12 col-md-6 col-lg-3">
          <NuxtLink to="/" class="footer__logo">
            <img :src="Logo" />
          </NuxtLink>
          <PrismicRichText :field="contact_info" class="footer__rich-text" />
        </div>
        <div class="col-12 col-md-6 col-lg-4 hours-col">
          <p class="subtitle">
            Our Hours
          </p>
          <ul class="hours">
            <li class="hours__hour" v-for="hour in hours">
              <p class="day">{{ hour.primary.day }}</p>
              <p class="time">{{ hour.primary.time }}</p>
            </li>
          </ul>
        </div>
        <div class="col-12 col-lg-5 flex">
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
          <ul class="social">
            <li>
              <a href="https://www.instagram.com/carchoiceservicevb/" target="_blank">
                <Instagram />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/carchoiceservicevb757/" target="_blank">
                <Facebook />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useContentStore } from '~/core/store/contentStore';
import Facebook from '@/assets/svg/facebook.svg?component';
import Instagram from '@/assets/svg/instagram.svg?component';

const { getOptions } = useContentStore();
const { contact_info, columns, hours } = getOptions('footer');
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
      max-width: 300px;
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
      font-size: 18px;
      color: $xanthous;
      font-weight: 600;
      text-underline-offset: 4px;
    }
    p {
      margin: 0;
      &:first-of-type { margin-bottom: 16px;}
      a {
        @include inlineLink;
        font-family: $openSans;
        font-size: 16px;
        font-weight: 600;
        display: inline-block;
        padding-top: 0;
        margin: 0;
        white-space: initial;
      }
    }
  }
  .flex {
    flex-wrap: wrap;
    @include bpMedium {
      flex-wrap: nowrap;
    }
    @include bpLarge {
      justify-content: flex-end;
    }
  }
  .hours-col {
    margin-top: 24px;
    margin-bottom: -8px;
    @include bpMedium {
      padding: 0 30px;
    }
    @include bpLarge {
      max-width: 360px;
      margin: {
        left: auto;
        right: auto;
      };
    }

  }
  .hours {
    padding: 0;
    display: flex;
    flex-direction: column;
    list-style: none;
    &__hour {
      display: flex;
      justify-content: space-between;
      margin: 8px 0;
      p {
        margin: 0;
        font-family: $openSans;
        font-weight: 600;
      }
    }
  }

  .subtitle {
    margin: 0;
    font-size: 18px;
    color: $xanthous;
    font-family: $openSans;
    font-weight: 600;
    text-underline-offset: 4px;
  }
  .footer-column {
    width: 100%;
    margin: 24px 0 0;
    @include bpMedium {
      width: auto;
      margin-top: 24px;
      &:first-of-type {
        margin-right: 32px;
      }
    }
    @include bpLarge {
      width: auto;
      margin: 24px 16px 0;
    }
  }

  .footer-column-list {
    margin-top: 16px;
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
      letter-spacing: 1px;
      font-family: $openSans;
      font-size: 16px;
      font-weight: 600;
    }
  }

  .legal {
    background: $night; 
    .social {
      display: flex;
      list-style: none;
      padding: 0;
      margin-left: 0;
      width: 100%;
      @include bpMedium {
        margin-left: auto;
        width: auto;
      }
      li {
        margin-right: 24px;
        &:last-of-type {
          margin-right: 0;
        }
        a {
          color: $ghost-white;
          opacity: 0.5;
          transition: opacity 300ms $authenticMotion;
          @include onHover {
            opacity: 1;
          }
        }
      }
    }
  }


}
</style>