import { defineStore } from 'pinia'

export const useUIStore = defineStore('ui-store', {
  state: () => ({
    pageLoaded: false,
  }),
  actions: {
    setPageLoaded(loaded: boolean) {
      this.pageLoaded = loaded;
    }
  }
});