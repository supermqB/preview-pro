import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('storeId', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      loading: false,
    };
  },
});
