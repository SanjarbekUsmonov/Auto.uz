<template>
  <div>
    <div class="title text-h4 text-weight-bold">
        Choices
    </div>
      <div class="container q-mt-md q-py-md q-gutter-md row wrap justify-between ">
          <div class="card " v-for="i in 10" :key="i">

          </div>
      </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style  scoped>
.container{
  width: 100%;
  height: auto;
  background: #333;
}
.card{
  width: 250px;
  height: 270px;
  background: grey;
}
</style>
