import { DirectiveBinding } from "nuxt/dist/app/compat/capi";

const initAppearable = (el: any, binding: DirectiveBinding) => {
  const threshold = binding.value && binding.value.threshold ? binding.value.threshold : 0.3;
  const values = { css: true, canAppear: true, ...(binding.value || {}) };
  const { onAppear, onReappear, onLeave, canAppear, css } = values;
  if (!canAppear || el.dataset.appearableBound) return;
  el.dataset.appearableBound = true;
  let isVisible = false;
  let hasAppeared = false;
  const handleAppear = (entries: any[]) => {
    entries.forEach((entry) => {
      if ((entry.intersectionRatio >= threshold && !isVisible)) {
        isVisible = true;
        if (!hasAppeared) {
          hasAppeared = true;
          if (onAppear) onAppear();
          if (css) el.classList.add('visible');
        } else if (onReappear) onReappear();
      } else if (entry.intersectionRatio < threshold && isVisible) {
        isVisible = false;
        if (onLeave) onLeave();
      }
    })
  };
  const observer = new IntersectionObserver(handleAppear, {
    root: null,
    rootMargin: '0px',
    // eslint-disable-next-line
    threshold: new Array(20).fill(null).map((v, i) => (Math.round((((i + 1) * 0.05)) * 100) / 100)),
  });
  setTimeout(() => {
    if (css) el.classList.add('ready');
    observer.observe(el);
  }, 0);
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('appear', {
    beforeMount (el) { el.classList.add('ap-parent'); },
    mounted (el, binding) { initAppearable(el, binding) },
    updated (el, binding) { initAppearable(el, binding) },
    getSSRProps (binding, vnode) {
      return { binding, vnode }
    },
  })
});
