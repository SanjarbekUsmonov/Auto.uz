<template>
  <div class="q-mt-lg">
      <div class="title text-h4 text-weight-bolder">
         Купить автомобиль
      </div>
      <div class="carbuy q-pa-md  q-col-gutter-xs row wrap justify-between  shadow-10 q-mt-xl">
          <div class="select" style="width: 270px">
            <q-select standout="bg-teal text-white" v-model="model" :options="options" label="Custom standout" />
          </div>
          <div class="select" style="width: 270px">
            <q-select standout="bg-teal text-white" v-model="model" :options="options" label="Custom standout" />
          </div>
          <div class="select" style="width: 270px">
            <q-select standout="bg-teal text-white" v-model="model" :options="options" label="Custom standout" />
          </div>
          <div class="select" style="width: 270px">
            <q-select standout="bg-teal text-white" v-model="model" :options="options" label="Custom standout" />
          </div>
          <div class="select" style="width: 270px">
            <q-select standout="bg-teal text-white" v-model="model" :options="options" label="Custom standout" />
          </div>
          <div class="select" style="width: 270px">
            <q-select standout="bg-teal text-white" v-model="model" :options="options" label="Custom standout" />
          </div>
          <div class="select" style="width: 270px">
            <q-select standout="bg-teal text-white" v-model="model" :options="options" label="Custom standout" />
          </div>
          <div class="select" style="width: 270px">
            <q-select standout="bg-teal text-white" v-model="model" :options="options" label="Custom standout" />
          </div>
          <div class="select" style="width: 270px">
            <q-select standout="bg-teal text-white" v-model="model" :options="options" label="Custom standout" />
          </div>
      </div>
  </div>
</template>

<script>
 import { ref } from 'vue'

 export default {
  setup () {
    return {
      model: ref(null),
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ]
    }
  }
}
</script>

<style scoped>
.carbuy{
  width: 100%;
  height: auto;
  background: #fff;
  border-radius: 10px;
}

</style>
