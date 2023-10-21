<template>
  <footer class="footer">
    <div class="container footer__content">
      <div class="row justify-between">
        <div class="col-3">
          <NuxtLink to="/" class="footer__logo">
            <img :src="Logo" />
          </NuxtLink>
          <p class="body-small">
            At Car Choice we want to be your first stop for all your vehicle repair & maintenance needs.
          </p>
        </div>
        <div class="col-6 flex">
          <div class="footer-column" v-for="column in fakeColumns">
            <p class="subtitle">
              {{ column.label }}
            </p>
            <ul class="footer-column-list">
              <li v-for="item in column.items">
                <InlineLink :label="item.label" />
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
  import Logo from '@/assets/images/logo.png';
  const fakeColumns = [
    {
      label: 'ABOUT US',
      items: [
        { label: 'OUR WORK' },
        { label: 'OUR TEAM' },
        { label: 'FAQ' },
      ]
    },
    {
      label: 'POPULAR SERVICES',
      items: [
        { label: 'TIRE REPAIR' },
        { label: 'BRAKE REPAIR' },
        { label: 'ENGINE REPAIR' },
        { label: 'STEERING REPAIR' },
        { label: 'COOLING SYSTEM' },
        { label: 'WHEEL ALIGNMENT' },
        { label: 'BATTERY STARTING' },
        { label: 'SUPSPENSION REPAIR' },
      ]
    }
  ]
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

  .subtitle {
    margin: 0;
    font-size: 16px;
    color: $xanthous;
    font-weight: 600;
    // text-decoration: underline;
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