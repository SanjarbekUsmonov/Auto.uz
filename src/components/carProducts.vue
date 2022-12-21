<template>
  <div>
    <div class="title text-h4 text-weight-bold">
        Choices
    </div>
      <div>
        <Suspense>
          <card-component/>

        </Suspense>
      </div>
  </div>
</template>

<script>
import cardComponent from './cardComponent.vue'
  export default {
  components: { cardComponent },

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
