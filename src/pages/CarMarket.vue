<template>
  <div>
      <div class="container">
          <div class="content">
            <filterCar/>
            <div class="mt-50px">
              <CarCard/>
            </div>
          </div>

      </div>
  </div>
</template>

<script setup>
import filterCar from '../components/car-market/filterCar.vue';
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
