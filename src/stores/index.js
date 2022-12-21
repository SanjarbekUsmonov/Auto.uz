import { store } from 'quasar/wrappers'
import { createPinia } from 'pinia'
import { defineStore } from 'pinia';
import axios from 'axios';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    cars: [],
    categories: [],
    limit: []
  }),


  actions: {
    async getApi(){
       try {
        let res = await axios.get("http://autouz.pythonanywhere.com/productlar/")
        this.cars = res.data
        this.limit = [...this.cars]
        this.cars.length >= 6 ? this.limit.length = 6 : this.limit
        console.log(this.limit);
       } catch (error) {
        console.log(error);
       }
    },
    async getApiCategory(){
      try {
       let res = await axios.get("http://autouz.pythonanywhere.com/categoriya/")
       this.categories = res.data
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
