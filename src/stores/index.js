import { store } from 'quasar/wrappers'
import { createPinia, defineStore } from 'pinia'
import axios from 'axios'

export const useStore = defineStore('store',{
  state: ()=>({
    cars: [],
    limited: []
  }),
  actions:{
    async GET_CARS(){
      try{
        const cars_api = await axios.get('http://autouz.pythonanywhere.com/productlar/')
        this.cars = cars_api.data
        this.limited = JSON.parse(JSON.stringify(this.cars.reverse()))
        this.limited.length = 4
        console.log(this.cars);
        console.log(this.limited);
      }
      catch(err){
        console.log(err);
      }
    },
    SET_LIMIT(){
      this.cars.length = 6
    }
  }
})

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store((/* { ssrContext } */) => {
  const pinia = createPinia()

  // You can add Pinia plugins here
  // pinia.use(SomePiniaPlugin)

  return pinia
})
