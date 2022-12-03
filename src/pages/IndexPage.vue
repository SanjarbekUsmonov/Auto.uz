<template>
  <div>
     <CompCarSimiller/>
     <CompCarusel/>
     <CompAutoMake/>
  </div>
</template>

<script>
import CompCarSimiller from 'src/components/CompCarSimiller.vue'
import CompCarusel from 'src/components/CompCarusel.vue'
import CompAutoMake from 'src/components/CompAutoMake.vue'
  export default {
  components: { CompCarSimiller, CompCarusel, CompAutoMake },

  }
</script>

<style  scoped>

</style>
