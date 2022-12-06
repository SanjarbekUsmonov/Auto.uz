<template>
  <div>
    <!-- text boshlanishi sarlavha -->
    <div class="text row  items-end bg-white">
       <div>
        <div class="text__title text-h4 text-weight-bold">
          Select auto parts by make
        </div>
         <div class="text__discription text-subtitle2 text-grey">
            View a selection of our most popular makes
        </div>
       </div>
    </div>
     <!-- text tugashi sarlavha -->

     <!-- markalar boshlanishi -->
    <div class="container q-mt-lg q-gutter-md  row justify-between">
        <div class="make bg-grey-3 row  shadow-10 justify-center" v-for="i in 10" :key="i">
            <div class="make__img">
              <q-img src="https://images.satu.kz/68605191_w640_h640_mersedes-slk-klass.jpg" alt=""/>
            </div>
            <div class="make__title">
              <b>Mersedes</b>
            </div>
        </div>
    </div>
    <!-- markalar tugashi -->
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
}
.make{
  width: 100px;
  height: 100px;
  padding: 10px;

}
.make:hover{
  cursor: pointer;
  opacity: 0.8;
}
.make__img{
  width: 60px;
  height: 60px;
}
.text{
  width: 100%;
  height: 100px;
}
</style>
