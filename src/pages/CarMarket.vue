<template>
  <div>
      <CompCarSimiller/>
      <div class="container">
          <div class="content">
            <CompCarTobuy/>
            <div class="mt-50px">
              <CarCard/>
            </div>
          </div>
          
      </div>
  </div>
</template>

<script setup>
import CompCarSimiller from 'src/components/CompCarSimiller.vue';
import CompCarTobuy from '../components/car-market/CompCarTobuy.vue';
import CarCard from 'src/components/car-market/CarCard.vue';

  
</script>

<style  scoped>
.container{
  width: 100%;
}
.content{
  margin: 15px;

}
</style>
