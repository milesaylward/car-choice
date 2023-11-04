export const useUIStore = defineStore('ui-store', {
  state: () => ({
    pageLoaded: false,
    scrollPos: 0,
    pageTransitonComplete: true,
  }),
  getters: {
    showLoader: (state) => !state.pageLoaded
  },
  actions: {
    setPageLoaded(loaded: boolean) {
      this.pageLoaded = loaded;
    },
    setPageTransitonComplete(bool: boolean) {
      this.pageTransitonComplete = bool;
    },
    setScrollPosition(pos: number) {
      this.scrollPos = pos;
    }
  }
});