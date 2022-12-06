<template>
  <div>
      <CompCarSimiller/>
      <div class="container">
          <div class="content">
            <CompCarTobuy/>
            <CompCarbuy/>
          </div>
      </div>
  </div>
</template>

<script>
import CompCarSimiller from 'src/components/CompCarSimiller.vue';
import CompCarTobuy from '../components/car-market/CompCarTobuy.vue';
import CompCarbuy from '../components/car-market/CompCarbuy.vue'

  export default {
    components: { CompCarSimiller,CompCarTobuy,CompCarbuy }
}
</script>

<style  scoped>
.container{
  width: 100%;
}
.content{
  width: 70%;
  height: auto;
  margin: 0 auto;
}
</style>
