export const useContentStore = defineStore('content', {
  state: () => ({
    content: {} as { [key: string]: any },
    options: {} as { [key: string]: any },
  }),
  getters: {
    getContent: (state) => (key: string) => state.content[key] || null,
    getOptions: (state) => (key: string) => state.options[key] || null,
  },
  actions: {
    setContent(key: string, content: any) {
      this.content[key] = content;
    },
    setOptions(key: string, content: any) {
      this.options[key] = content;
    },
    async checkOptions() {
      const data = ['header'].map((opt) => this.options[opt]);
      const prismic = usePrismic()
      if (!data.every(val => val)) {
        const { data } = await useAsyncData('global', () => prismic.client.getSingle('global'));
        if (data.value) {
          const { data: global_data } = data.value;
          const header = {
            button: {
              label: global_data.header_button_label,
              link: global_data.header_button_link
            },
            slices: global_data.slices
          }
          this.options.header = header;
        }
      }
    }
  }
})