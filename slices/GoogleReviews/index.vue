
<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="google-reviews"
  >
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div
            class='sk-ww-google-reviews'
            id="reviews"
            data-embed-id='221415'
            style="background: transparent;"
            ref="reviewWrapper"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
import { Content } from "@prismicio/client";

defineProps(
  getSliceComponentProps<Content.GoogleReviewsSlice>(["slice", "index","slices","context"])
);

const createPlaceHolder = (image: HTMLElement, imgWrapper: HTMLElement ) => {
  const imageParent = image.parentElement;
  image.remove();
  const placeholder = document.createElement('span');
  placeholder.classList.add('image-placeholder');
  const nameWrapper = imgWrapper.parentElement?.querySelector('.sk-reviewer-name-action');
  const name = nameWrapper?.querySelector('strong')?.innerText || '';
  const firstInitial = name[0];
  placeholder.innerText = firstInitial;
  imageParent?.appendChild(placeholder);
}

const reviewWrapper = ref();
let observer: MutationObserver;
const checkImages = () => {
  const images = reviewWrapper.value.querySelectorAll('.sk-reviewer-pic');
  if (images.length) {
    images.forEach((imgWrapper: HTMLElement) => {
      const image = imgWrapper.querySelector('img')!;
      var imgCheck = new Image();
      imgCheck.src = image.src;
      imgCheck.onload = () => {
        if (!imgCheck.height) createPlaceHolder(image, imgWrapper);
      }
      imgCheck.onerror = () => { createPlaceHolder(image, imgWrapper); };
    });
    observer.disconnect();
  }
}

watch(reviewWrapper, (val: HTMLElement) => {
  observer = new MutationObserver(checkImages)
  observer.observe(val, { childList: true });
});
onMounted(() => {

  let script = document.getElementById('review-script') as HTMLScriptElement;
  if (!script) {
    script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.src = 'https://widgets.sociablekit.com/google-reviews/widget.js';
    setTimeout(() => { document.body.appendChild(script); }, 500);
  }
});
</script>

<style lang="scss">
.google-reviews {
  padding: 48px 0;
  @include media-query(md) {
    padding: 80px 0;
  }
  #reviews {
    background: transparent !important;
    .sk_reviews_grid-item {
      transition: transform 350ms $authenticMotion;
      @include onHover {
        transform: scale(1.025);
      }
    }
    .sk_reviews_grid-content {
      background: #121212 !important;
      border-radius: 16px !important;
      .sk-reviewer-name-action {
        a {
          strong {
            color: $ghost-white;
          }
        }
      }
      .image-placeholder {
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: $ghost-white;
        border-radius: 50%;
        font-size: 18px;
        text-transform: uppercase;
      }
      .sk-google-review-button-more {
        @include inlineLink;
        font-family: $openSans;
        font-size: 16px;
        display: flex;
        align-items: flex-end;
        padding: 0;
        margin: 0;
        @include onHover {
          &::after {
            transform: scale(0);
          }
        }
        img {
          margin-right: 8px;
        }
      }
      .sk-ww-google-reviews-review-text-content {
        color: $ghost-white;
      }
    }
  }
}
</style>