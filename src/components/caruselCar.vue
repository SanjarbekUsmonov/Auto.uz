<template>
  <div class="q-px-xl q-pt-md">
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      :autoplay="autoplay"
      animated
      arrows
      control-color="primary"
      class="rounded-borders"
    >
      <q-carousel-slide name="style" class="column no-wrap flex-center"
       img-src="https://cdn.quasar.dev/img/mountains.jpg"
      >
        <div class="q-mt-md text-center absolute-bottom custom-caption">
          <h3>{{ lorem }}</h3>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="tv" class="column no-wrap flex-center"
      img-src="https://cdn.quasar.dev/img/mountains.jpg"
      >
      <div class="q-mt-md text-center absolute-bottom custom-caption">
          <h3>{{ lorem }}</h3>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="layers" class="column no-wrap flex-center"
      img-src="https://cdn.quasar.dev/img/mountains.jpg"
      >
      <div class="q-mt-md text-center absolute-bottom custom-caption">
          <h3>{{ lorem }}</h3>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="map" class="column no-wrap flex-center"
       img-src="https://cdn.quasar.dev/img/mountains.jpg"
      >
      <div class="q-mt-md text-center absolute-bottom custom-caption">
          <h3>{{ lorem }}</h3>
        </div>
      </q-carousel-slide>
    </q-carousel>

    <div class="row justify-center q-mt-md">
      <q-btn-toggle
        glossy
        v-model="slide"
        :options="[
          { label: 1, value: 'style' },
          { label: 2, value: 'tv' },
          { label: 3, value: 'layers' },
          { label: 4, value: 'map' }
        ]"
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      slide: ref('style'),
      lorem: 'Lorem ipsum dolor,',
      slide: ref(1),
      autoplay: ref(true)
    }
  }
}
</script>
<style lang="css">
h3{
  color: aliceblue;
}
</style>

















<!-- <template>
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
</style> -->
