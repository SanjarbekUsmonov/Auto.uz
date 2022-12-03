<template>
  <div>
     <CompCarSimiller/>
     <CompCarusel/>
     <CompAutoMake/>
     <CompNameCar/>
  </div>
</template>

<script>
import CompCarSimiller from 'src/components/CompCarSimiller.vue'
import CompCarusel from 'src/components/CompCarusel.vue'
import CompAutoMake from 'src/components/CompAutoMake.vue'
import CompNameCar from 'src/components/CompNameCar.vue'
  export default {
  components: { CompCarSimiller, CompCarusel, CompAutoMake, CompNameCar },

  }
</script>

<style  scoped>

</style>
