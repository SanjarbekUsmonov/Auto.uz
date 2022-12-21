<template>
  <div class="q-mt-lg">
    <div class="conatiner">
      <div class="content row justify-between">
        <!-- car name boshlanishi -->
        <div class="content__car__much w-100pr row justify-betwen" >
          <div class="w-19pr text-center mt-5px" v-for="category , i in store.categories" :key="i">
            {{ category.category_name }} <span class=" text-grey">{{ category.mahsulot.length }}</span>
          </div>
        </div>
         <!-- car name tugashi -->
      </div>
    </div>
  </div>
</template>

<script setup>
import {useCounterStore} from 'src/stores/index'
const store = useCounterStore()
store.getApiCategory()
</script>

<style  scoped>
.conatiner {
  width: 100%;
  height: auto;
}
.content {
  width: 90%;
  height: auto;
  margin: 0 auto;
  /* background: red; */
}
ul li {
  list-style: none;
  line-height: 200%;
}
ul li:hover{
  cursor: pointer;
  color: red;
}

</style>
