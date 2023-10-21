export const useUIStore = defineStore('ui-store', {
  state: () => ({
    pageLoaded: false,
    scrollPos: 0,
  }),
  getters: {
    showLoader: (state) => !state.pageLoaded
  },
  actions: {
    setPageLoaded(loaded: boolean) {
      this.pageLoaded = loaded;
    },
    setScrollPosition(pos: number) {
      this.scrollPos = pos;
    }
  }
});