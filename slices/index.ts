// Code generated by Slice Machine. DO NOT EDIT.

import { defineAsyncComponent } from "vue";
import { defineSliceZoneComponents } from "@prismicio/vue";

export const components = defineSliceZoneComponents({
  callout_banner: defineAsyncComponent(
    () => import("./CalloutBanner/index.vue")
  ),
  cards_section: defineAsyncComponent(() => import("./CardsSection/index.vue")),
  contact_form: defineAsyncComponent(() => import("./ContactForm/index.vue")),
  content_block: defineAsyncComponent(() => import("./ContentBlock/index.vue")),
  footer_hours: defineAsyncComponent(() => import("./FooterHours/index.vue")),
  form_service_type: defineAsyncComponent(
    () => import("./FormServiceType/index.vue")
  ),
  google_reviews: defineAsyncComponent(
    () => import("./GoogleReviews/index.vue")
  ),
  header_link: defineAsyncComponent(() => import("./Link/index.vue")),
  hero: defineAsyncComponent(() => import("./Hero/index.vue")),
  service_cards: defineAsyncComponent(() => import("./ServiceCards/index.vue")),
  testimonial_carousel: defineAsyncComponent(
    () => import("./TestimonialCarousel/index.vue")
  ),
  two_up: defineAsyncComponent(() => import("./TwoUp/index.vue")),
});
