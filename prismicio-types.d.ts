// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type GlobalDocumentDataSlicesSlice = HeaderLinkSlice;

type GlobalDocumentDataSlices2Slice = HeaderLinkSlice;

type GlobalDocumentDataSlices3Slice = HeaderLinkSlice;

/**
 * Content for Global documents
 */
interface GlobalDocumentData {
  /**
   * Header Button Label field in *Global*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: global.header_button_label
   * - **Tab**: Header
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  header_button_label: prismic.KeyTextField;

  /**
   * Header Button Link field in *Global*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: global.header_button_link
   * - **Tab**: Header
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  header_button_link: prismic.LinkField;

  /**
   * Slice Zone field in *Global*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: global.slices[]
   * - **Tab**: Header
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<GlobalDocumentDataSlicesSlice>
  /**
   * Contact Info field in *Global*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: global.contact_info
   * - **Tab**: Footer
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */;
  contact_info: prismic.RichTextField
  /**
   * Label 1 field in *Global*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: global.label_1
   * - **Tab**: Footer Column 1
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  label_1: prismic.KeyTextField;

  /**
   * Slice Zone field in *Global*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: global.slices2[]
   * - **Tab**: Footer Column 1
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices2: prismic.SliceZone<GlobalDocumentDataSlices2Slice>
  /**
   * Label 2 field in *Global*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: global.label_2
   * - **Tab**: Footer Column 2
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  label_2: prismic.KeyTextField;

  /**
   * Slice Zone field in *Global*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: global.slices3[]
   * - **Tab**: Footer Column 2
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices3: prismic.SliceZone<GlobalDocumentDataSlices3Slice>;
}

/**
 * Global document from Prismic
 *
 * - **API ID**: `global`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type GlobalDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<GlobalDocumentData>,
    "global",
    Lang
  >;

type PageDocumentDataSlicesSlice =
  | ContactFormSlice
  | TestimonialCarouselSlice
  | ServiceCardsSlice
  | CalloutBannerSlice
  | ContentBlockSlice
  | CardsSectionSlice
  | TwoUpSlice
  | HeroSlice
  | RichTextSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

type ServicePageDocumentDataSlicesSlice =
  | RichTextSlice
  | TestimonialCarouselSlice
  | TwoUpSlice
  | HeroSlice
  | ContentBlockSlice
  | CalloutBannerSlice
  | CardsSectionSlice;

/**
 * Content for Service Page documents
 */
interface ServicePageDocumentData {
  /**
   * Title field in *Service Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: service_page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Slice Zone field in *Service Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: service_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ServicePageDocumentDataSlicesSlice>
  /**
   * Meta Description field in *Service Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: service_page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Service Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: service_page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Service Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: service_page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Service Page document from Prismic
 *
 * - **API ID**: `service_page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ServicePageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ServicePageDocumentData>,
    "service_page",
    Lang
  >;

type ServiceTypesDocumentDataSlicesSlice = FormServiceTypeSlice;

/**
 * Content for Service Types documents
 */
interface ServiceTypesDocumentData {
  /**
   * Slice Zone field in *Service Types*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: service_types.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ServiceTypesDocumentDataSlicesSlice>;
}

/**
 * Service Types document from Prismic
 *
 * - **API ID**: `service_types`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ServiceTypesDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<ServiceTypesDocumentData>,
    "service_types",
    Lang
  >;

export type AllDocumentTypes =
  | GlobalDocument
  | PageDocument
  | ServicePageDocument
  | ServiceTypesDocument;

/**
 * Primary content in *CalloutBanner → Items*
 */
export interface CalloutBannerSliceDefaultItem {
  /**
   * Stat Number field in *CalloutBanner → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: callout_banner.items[].stat_number
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  stat_number: prismic.KeyTextField;

  /**
   * Stat Text field in *CalloutBanner → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: callout_banner.items[].stat_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  stat_text: prismic.KeyTextField;
}

/**
 * Default variation for CalloutBanner Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CalloutBannerSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<CalloutBannerSliceDefaultItem>
>;

/**
 * Slice variation for *CalloutBanner*
 */
type CalloutBannerSliceVariation = CalloutBannerSliceDefault;

/**
 * CalloutBanner Shared Slice
 *
 * - **API ID**: `callout_banner`
 * - **Description**: CalloutBanner
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CalloutBannerSlice = prismic.SharedSlice<
  "callout_banner",
  CalloutBannerSliceVariation
>;

/**
 * Primary content in *CardsSection → Primary*
 */
export interface CardsSectionSliceDefaultPrimary {
  /**
   * Headline field in *CardsSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cards_section.primary.headline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  headline: prismic.KeyTextField;

  /**
   * Button Label field in *CardsSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cards_section.primary.button_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_label: prismic.KeyTextField;

  /**
   * Button Link field in *CardsSection → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: cards_section.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;
}

/**
 * Primary content in *CardsSection → Items*
 */
export interface CardsSectionSliceDefaultItem {
  /**
   * Card Title field in *CardsSection → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cards_section.items[].card_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  card_title: prismic.KeyTextField;

  /**
   * Card Body field in *CardsSection → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cards_section.items[].card_body
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  card_body: prismic.KeyTextField;

  /**
   * Card Image field in *CardsSection → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: cards_section.items[].card_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  card_image: prismic.ImageField<never>;

  /**
   * Card Time field in *CardsSection → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cards_section.items[].card_time
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  card_time: prismic.KeyTextField;

  /**
   * Card Price field in *CardsSection → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cards_section.items[].card_price
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  card_price: prismic.KeyTextField;
}

/**
 * Default variation for CardsSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CardsSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CardsSectionSliceDefaultPrimary>,
  Simplify<CardsSectionSliceDefaultItem>
>;

/**
 * Slice variation for *CardsSection*
 */
type CardsSectionSliceVariation = CardsSectionSliceDefault;

/**
 * CardsSection Shared Slice
 *
 * - **API ID**: `cards_section`
 * - **Description**: CardsSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CardsSectionSlice = prismic.SharedSlice<
  "cards_section",
  CardsSectionSliceVariation
>;

/**
 * Primary content in *ContactForm → Primary*
 */
export interface ContactFormSliceDefaultPrimary {
  /**
   * Title field in *ContactForm → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_form.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Body field in *ContactForm → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_form.primary.body
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  body: prismic.KeyTextField;
}

/**
 * Default variation for ContactForm Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactFormSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContactFormSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ContactForm*
 */
type ContactFormSliceVariation = ContactFormSliceDefault;

/**
 * ContactForm Shared Slice
 *
 * - **API ID**: `contact_form`
 * - **Description**: ContactForm
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactFormSlice = prismic.SharedSlice<
  "contact_form",
  ContactFormSliceVariation
>;

/**
 * Primary content in *ContentBlock → Primary*
 */
export interface ContentBlockSliceDefaultPrimary {
  /**
   * Main Text field in *ContentBlock → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_block.primary.main_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  main_text: prismic.KeyTextField;

  /**
   * Sub Text field in *ContentBlock → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_block.primary.sub_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  sub_text: prismic.KeyTextField;

  /**
   * Main Image field in *ContentBlock → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: content_block.primary.main_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  main_image: prismic.ImageField<never>;

  /**
   * Sub Image 1 field in *ContentBlock → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: content_block.primary.sub_image_1
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  sub_image_1: prismic.ImageField<never>;

  /**
   * Sub Image 2 field in *ContentBlock → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: content_block.primary.sub_image_2
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  sub_image_2: prismic.ImageField<never>;

  /**
   * Button Label field in *ContentBlock → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_block.primary.button_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_label: prismic.KeyTextField;

  /**
   * Button Link field in *ContentBlock → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: content_block.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;
}

/**
 * Primary content in *ContentBlock → Items*
 */
export interface ContentBlockSliceDefaultItem {
  /**
   * List Item field in *ContentBlock → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_block.items[].list_item
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  list_item: prismic.KeyTextField;
}

/**
 * Default variation for ContentBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContentBlockSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContentBlockSliceDefaultPrimary>,
  Simplify<ContentBlockSliceDefaultItem>
>;

/**
 * Slice variation for *ContentBlock*
 */
type ContentBlockSliceVariation = ContentBlockSliceDefault;

/**
 * ContentBlock Shared Slice
 *
 * - **API ID**: `content_block`
 * - **Description**: ContentBlock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContentBlockSlice = prismic.SharedSlice<
  "content_block",
  ContentBlockSliceVariation
>;

/**
 * Primary content in *FormServiceType → Primary*
 */
export interface FormServiceTypeSliceDefaultPrimary {
  /**
   * Name field in *FormServiceType → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: form_service_type.primary.name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;
}

/**
 * Default variation for FormServiceType Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FormServiceTypeSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FormServiceTypeSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *FormServiceType*
 */
type FormServiceTypeSliceVariation = FormServiceTypeSliceDefault;

/**
 * FormServiceType Shared Slice
 *
 * - **API ID**: `form_service_type`
 * - **Description**: FormServiceType
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FormServiceTypeSlice = prismic.SharedSlice<
  "form_service_type",
  FormServiceTypeSliceVariation
>;

/**
 * Primary content in *Link → Primary*
 */
export interface HeaderLinkSliceDefaultPrimary {
  /**
   * Link Label field in *Link → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header_link.primary.link_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link_label: prismic.KeyTextField;

  /**
   * link field in *Link → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: header_link.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Default variation for Link Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeaderLinkSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeaderLinkSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Link*
 */
type HeaderLinkSliceVariation = HeaderLinkSliceDefault;

/**
 * Link Shared Slice
 *
 * - **API ID**: `header_link`
 * - **Description**: HeaderLink
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeaderLinkSlice = prismic.SharedSlice<
  "header_link",
  HeaderLinkSliceVariation
>;

/**
 * Primary content in *Hero → Items*
 */
export interface HeroSliceDefaultItem {
  /**
   * image field in *Hero → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Headline Text field in *Hero → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.items[].headline_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  headline_text: prismic.KeyTextField;

  /**
   * Subtitle Text field in *Hero → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.items[].subtitle_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subtitle_text: prismic.KeyTextField;

  /**
   * Body Text field in *Hero → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.items[].body_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  body_text: prismic.KeyTextField;

  /**
   * Button Text field in *Hero → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.items[].button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;

  /**
   * Button Link field in *Hero → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.items[].button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<HeroSliceDefaultItem>
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *RichText → Primary*
 */
export interface RichTextSliceDefaultPrimary {
  /**
   * Content field in *RichText → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Lorem ipsum...
   * - **API ID Path**: rich_text.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Primary content in *RichText → Items*
 */
export interface RichTextSliceDefaultItem {
  /**
   * Some new Field field in *RichText → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: rich_text.items[].some_new_field
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  some_new_field: prismic.KeyTextField;
}

/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RichTextSliceDefaultPrimary>,
  Simplify<RichTextSliceDefaultItem>
>;

/**
 * Slice variation for *RichText*
 */
type RichTextSliceVariation = RichTextSliceDefault;

/**
 * RichText Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSlice = prismic.SharedSlice<
  "rich_text",
  RichTextSliceVariation
>;

/**
 * Primary content in *ServiceCards → Primary*
 */
export interface ServiceCardsSliceDefaultPrimary {
  /**
   * Title field in *ServiceCards → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: service_cards.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;
}

/**
 * Primary content in *ServiceCards → Items*
 */
export interface ServiceCardsSliceDefaultItem {
  /**
   * Service Link field in *ServiceCards → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: service_cards.items[].service_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  service_link: prismic.LinkField;

  /**
   * Icon field in *ServiceCards → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: service_cards.items[].icon
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icon: prismic.ImageField<never>;

  /**
   * Service Name field in *ServiceCards → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: service_cards.items[].service_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  service_name: prismic.KeyTextField;

  /**
   * Body Text field in *ServiceCards → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: service_cards.items[].body_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  body_text: prismic.KeyTextField;
}

/**
 * Default variation for ServiceCards Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ServiceCardsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ServiceCardsSliceDefaultPrimary>,
  Simplify<ServiceCardsSliceDefaultItem>
>;

/**
 * Slice variation for *ServiceCards*
 */
type ServiceCardsSliceVariation = ServiceCardsSliceDefault;

/**
 * ServiceCards Shared Slice
 *
 * - **API ID**: `service_cards`
 * - **Description**: ServiceCards
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ServiceCardsSlice = prismic.SharedSlice<
  "service_cards",
  ServiceCardsSliceVariation
>;

/**
 * Default variation for Test Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *Test*
 */
type TestSliceVariation = TestSliceDefault;

/**
 * Test Shared Slice
 *
 * - **API ID**: `test`
 * - **Description**: Test
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestSlice = prismic.SharedSlice<"test", TestSliceVariation>;

/**
 * Primary content in *TestimonialCarousel → Items*
 */
export interface TestimonialCarouselSliceDefaultItem {
  /**
   * Name field in *TestimonialCarousel → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonial_carousel.items[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Quote field in *TestimonialCarousel → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonial_carousel.items[].quote
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  quote: prismic.KeyTextField;
}

/**
 * Default variation for TestimonialCarousel Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestimonialCarouselSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<TestimonialCarouselSliceDefaultItem>
>;

/**
 * Slice variation for *TestimonialCarousel*
 */
type TestimonialCarouselSliceVariation = TestimonialCarouselSliceDefault;

/**
 * TestimonialCarousel Shared Slice
 *
 * - **API ID**: `testimonial_carousel`
 * - **Description**: TestimonialCarousel
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestimonialCarouselSlice = prismic.SharedSlice<
  "testimonial_carousel",
  TestimonialCarouselSliceVariation
>;

/**
 * Primary content in *TwoUp → Primary*
 */
export interface TwoUpSliceDefaultPrimary {
  /**
   * Eyebrow field in *TwoUp → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: two_up.primary.eyebrow
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  eyebrow: prismic.KeyTextField;

  /**
   * Headline field in *TwoUp → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: two_up.primary.headline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  headline: prismic.KeyTextField;

  /**
   * Body Text field in *TwoUp → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: two_up.primary.body_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  body_text: prismic.KeyTextField;

  /**
   * Animation field in *TwoUp → Primary*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: two_up.primary.animation
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  animation: prismic.LinkToMediaField;

  /**
   * Image field in *TwoUp → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: two_up.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for TwoUp Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TwoUpSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TwoUpSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *TwoUp*
 */
type TwoUpSliceVariation = TwoUpSliceDefault;

/**
 * TwoUp Shared Slice
 *
 * - **API ID**: `two_up`
 * - **Description**: TwoUp
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TwoUpSlice = prismic.SharedSlice<"two_up", TwoUpSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      GlobalDocument,
      GlobalDocumentData,
      GlobalDocumentDataSlicesSlice,
      GlobalDocumentDataSlices2Slice,
      GlobalDocumentDataSlices3Slice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      ServicePageDocument,
      ServicePageDocumentData,
      ServicePageDocumentDataSlicesSlice,
      ServiceTypesDocument,
      ServiceTypesDocumentData,
      ServiceTypesDocumentDataSlicesSlice,
      AllDocumentTypes,
      CalloutBannerSlice,
      CalloutBannerSliceDefaultItem,
      CalloutBannerSliceVariation,
      CalloutBannerSliceDefault,
      CardsSectionSlice,
      CardsSectionSliceDefaultPrimary,
      CardsSectionSliceDefaultItem,
      CardsSectionSliceVariation,
      CardsSectionSliceDefault,
      ContactFormSlice,
      ContactFormSliceDefaultPrimary,
      ContactFormSliceVariation,
      ContactFormSliceDefault,
      ContentBlockSlice,
      ContentBlockSliceDefaultPrimary,
      ContentBlockSliceDefaultItem,
      ContentBlockSliceVariation,
      ContentBlockSliceDefault,
      FormServiceTypeSlice,
      FormServiceTypeSliceDefaultPrimary,
      FormServiceTypeSliceVariation,
      FormServiceTypeSliceDefault,
      HeaderLinkSlice,
      HeaderLinkSliceDefaultPrimary,
      HeaderLinkSliceVariation,
      HeaderLinkSliceDefault,
      HeroSlice,
      HeroSliceDefaultItem,
      HeroSliceVariation,
      HeroSliceDefault,
      RichTextSlice,
      RichTextSliceDefaultPrimary,
      RichTextSliceDefaultItem,
      RichTextSliceVariation,
      RichTextSliceDefault,
      ServiceCardsSlice,
      ServiceCardsSliceDefaultPrimary,
      ServiceCardsSliceDefaultItem,
      ServiceCardsSliceVariation,
      ServiceCardsSliceDefault,
      TestSlice,
      TestSliceVariation,
      TestSliceDefault,
      TestimonialCarouselSlice,
      TestimonialCarouselSliceDefaultItem,
      TestimonialCarouselSliceVariation,
      TestimonialCarouselSliceDefault,
      TwoUpSlice,
      TwoUpSliceDefaultPrimary,
      TwoUpSliceVariation,
      TwoUpSliceDefault,
    };
  }
}
