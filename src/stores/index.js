import { store } from 'quasar/wrappers'
import { createPinia } from 'pinia'
import { defineStore } from 'pinia';
import axios from 'axios';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    cars: [],
    counter: 0
  }),

  actions: {
    async getApi(){
       try {
        let res = await axios.get("http://autouz.pythonanywhere.com/productlar/")
        this.cars = res.data
       } catch (error) {
        console.log(error);
       }
    },
  },

  getters: {

  },
});



export default store((/* { ssrContext } */) => {
  const pinia = createPinia()

  // You can add Pinia plugins here
  // pinia.use(SomePiniaPlugin)

  return pinia
})
