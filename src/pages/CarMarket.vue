<template>
  <div>
      <CompCarSimiller/>
      <div class="container">
          <div class="content">

          </div>

      </div>
  </div>
</template>

<script>
import CompCarSimiller from 'src/components/CompCarSimiller.vue';

  export default {
    components: { CompCarSimiller }
}
</script>

<style  scoped>
.container{
  height: 100vh;
}
.content{
  width: 75%;
  height: 600px;
  margin: 0 auto;
  background: blue;
}
</style>
