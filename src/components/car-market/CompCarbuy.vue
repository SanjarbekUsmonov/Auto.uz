<template>
  <div class="q-mt-xl">
      <div class="card column q-mt-md" v-for="i in 7" :key="i">

      </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style  scoped>
.card{
  width: 100%;
  height: 200px;
  background: #333;
  border-radius: 10px;
}
</style>
