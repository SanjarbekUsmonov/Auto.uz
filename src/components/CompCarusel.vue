<template>
  <div>
    <div class="container">
        <div >
          <q-carousel
            style="height: 100vh;"
            animated
            v-model="slide"
            navigation
            infinite
            :autoplay="autoplay"
          >
            <q-carousel-slide
              :name="1"
              img-src="https://images2.alphacoders.com/114/thumb-1920-1146096.jpg"
            />
            <q-carousel-slide
              :name="2"
              img-src="https://img.besthqwallpapers.com/Uploads/4-11-2018/70747/2018-lamborghini-aventador-svj-gray-racing-car-car-tuning.jpg"
            />
            <q-carousel-slide
              :name="3"
              img-src="https://guru-tuning.com/upload/resize_cache/iblock/059/1280_860_2/059583e8db0dc822b970e5cd6ae35d35.jpg"
            />
            <q-carousel-slide
              :name="4"
              img-src="https://www.policarobmw.ca/wp-content/uploads/2018/08/P90298665-highRes.jpg"
            />
          </q-carousel>
        </div>
    </div>
  </div>
</template>


<script setup>
import {ref} from 'vue'
  let slide = ref(1)
  let autoplay = ref(true)
</script>

<style lang="scss" scoped>
.container {
  height: auto;
}
</style>
