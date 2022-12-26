<template>
  <div>
     <caruselCar/>
     <carImgMarka/>
     <carMarka/>
     <carProducts/>
  </div>
</template>


<script>

import caruselCar from 'src/components/caruselCar.vue'
import carImgMarka from 'src/components/carImgMarka.vue'
import carMarka from 'src/components/carMarka.vue'
import carProducts from 'src/components/carProducts.vue'
  export default {
  components: { caruselCar, carImgMarka, carMarka,carProducts },

  }
</script>

<style  scoped>

</style>
