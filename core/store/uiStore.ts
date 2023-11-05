export const useUIStore = defineStore('ui-store', {
  state: () => ({
    pageLoaded: false,
    scrollPos: 0,
    viewWidth: 0,
    viewHeight: 0,
    pageTransitonComplete: true,
  }),
  getters: {
    showLoader: (state) => !state.pageLoaded
  },
  actions: {
    setPageLoaded(loaded: boolean) {
      this.pageLoaded = loaded;
    },
    setViewPortSize() {
      this.viewHeight = window.innerHeight;
      this.viewWidth = window.innerWidth;
    },
    setPageTransitonComplete(bool: boolean) {
      this.pageTransitonComplete = bool;
    },
    setScrollPosition(pos: number) {
      this.scrollPos = pos;
    }
  }
});