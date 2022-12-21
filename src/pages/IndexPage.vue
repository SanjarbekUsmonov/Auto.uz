<template>
  <div>
     <CompCarSimiller/>
     <CompCarusel/>
     <CompAutoMake/>
     <CompNameCar/>
     <Suspense>
      <CompCarChoices/>
     </Suspense>
     
  </div>
</template>


<script>
import CompCarSimiller from 'src/components/CompCarSimiller.vue'
import CompCarusel from 'src/components/CompCarusel.vue'
import CompAutoMake from 'src/components/CompAutoMake.vue'
import CompNameCar from 'src/components/CompNameCar.vue'
import CompCarChoices from 'src/components/CompCarChoices.vue'
  export default {
  components: { CompCarSimiller, CompCarusel, CompAutoMake, CompNameCar,CompCarChoices },

  }
</script>

<style  scoped>

</style>
