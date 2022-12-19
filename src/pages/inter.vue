<template>
  <div class="q-pa-md">
    <div class="row justify-center q-gutter-sm">
      <q-intersection
        v-for="index in 60"
        :key="index"
        transition="scale"
        class="example-item"
      >
        <CarCard/>
      </q-intersection>
    </div>
  </div>
</template>
<script setup>
import CarCard from 'src/components/car-market/CarCard.vue';


</script>
<style scoped>
.example-item{
  width: 100%;
  height: 250px;
}
@media screen and (max-width:600px) {
.example-item{
    width: 100%;
    height: 520px;
  }   
}
  
</style>
