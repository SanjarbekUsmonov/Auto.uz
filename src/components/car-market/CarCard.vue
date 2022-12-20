<template >
  <div v-for="cars in 5" :key="cars" class="q-mt-md">
    <div class=" p-15px card-car">
      <div class="w-30pr car__carusel">
        <div class="car__title-tel">
            <div class="w-100pr fs-16px">
                <div class=" car__name">Infiniti Q30 , 2017</div>
                <div class="row justify-between mb-10px">
                    <div class="car__prince" >2 050 000 ₽</div>
                    <div >40 000 KM</div>
                </div>
            </div>
        </div>
        <div>
          <q-carousel
            animated
            v-model="slide"
            arrows
            infinite
            height="200px"
            class="br-7px"
          >
            <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg"
            />
            <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg"
            />
            <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg"
            />
          </q-carousel>
        </div>
      </div>
      <div class="w-60pr row car__info pl-10px">
        <div class="row w-100pr fs-16px car__title-komp">
          <div class="w-33pr car__name">Infiniti Q30 , 2017</div>
          <div class="w-33pr "><span class="car__prince">2 050 000 ₽</span></div>
          <div class="w-33pr">40 000 KM</div>
        </div>
        <div class="w-33pr text-grey car__info-info">
          <div>2.0 L /211 L.S/Benzin</div>
          <div>Robot</div>
          <div>Xetchbek 5 DV.</div>
        </div>
        <div class="w-33pr text-grey">
          <div>Ploxoy</div>
          <div>Beliy</div>
        </div>
        <div class="w-33pr car__verified ">
          <div class="fs-16px text-green">
            <q-icon name="verified" color="green" size="28px" /> Проверенный    дилер
          </div>
          <div class="text-blue-7 mt-5px">U bir narsa +</div>
        </div>
        <div class="w-100pr">
          <div>
            <span class="p-5px bg-grey-3 text-blue-7 br-5px fs-12px">
              Maximum - avotaojsk goda
            </span>
          </div>

          <div class=" mt-10px car__owner">
            <div class="m-5px row justify-between items-center">
                <div class="w-50pr">
                    Mullajonov  Alimardon
                </div>
                <div>
                    <q-btn class="bg-green text-white" padding="5px 10px"> Qo'ng'iroq </q-btn>
                </div>
            </div>
          </div>

          <div class="mt-10px row justify-between">
            <div>
                <q-icon name="verified" color="green" size="22px" class=" comp " /> Fergana
            </div>
            <div>
                <q-icon name="favorite_border"  size="22px" class=" comp " />
            </div>
          </div>
        </div>
      </div>
      <div class="w-30px car__icons-chect"></div>
      <div class="w-30px h-120px br-5px car__icons" style="border: 1px solid grey">
        <div class="row justify-center h-25pr items-center" style="border-bottom: 1px solid grey" >
          <q-icon name="favorite_border" size="22px" />
        </div>
        <div class="row justify-center h-25pr items-center" style="border-bottom: 1px solid grey" >
          <q-icon name="favorite_border" size="22px" />
        </div>
        <div class="row justify-center h-25pr items-center" style="border-bottom: 1px solid grey" >
          <q-icon name="favorite_border" size="22px" />
        </div>
        <div class="row justify-center h-25pr items-center">
          <q-icon name="favorite_border" size="22px" />
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import {useCounterStore}  from 'src/stores/index'
const store = useCounterStore ()
store.getApi()



// import axios from "axios";
// import { ref,onBeforeMount } from "vue";
// const slide = ref(1);
// const cars = ref([]);
// onBeforeMount(function(){
//   getCars()
// })
// let getCars = async function(){
//   try{
//     let res = await axios. get('http://autouz.pythonanywhere.com/productlar/')
//     cars.value = res.data
//   }
//   catch(err){
//     console.log(err + 'xato bor');
//   }
// }
</script>

<style lang="css" scoped>
.card-car{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid grey;
}
.card-car:hover {
  box-shadow: 0px 2px 20px 2px rgb(169, 167, 167);
  cursor: pointer;
  border-radius: 10px;
  border-bottom: none;
}
.car__prince{
    background: rgb(40, 189, 2);
    border-radius: 5px;
    padding: 2px 10px 2px 10px;
    color: white;
}
.car__icons {
  display: none;
}
.car__owner{
    display: none;
}
.card-car:hover .car__name {
  color: red;
}
.card-car:hover .car__icons {
  display: block;
}
.card-car:hover .car__icons-chect {
  display: none;
}
.car__title-tel{
    display: none;
}
.comp{
    display: none;
}
@media screen and (max-width:600px) {
    .card-car:hover {
        box-shadow: none ;
        cursor: pointer;
        border-radius: 0 ;
        border-bottom: 5px solid rgb(193, 190, 190);
    }
    .card-car{
        display: block;
        border-bottom: 5px solid rgb(175, 172, 172);
    }
    .car__title-tel{
        display: block;
    }
    .car__title-komp{
        display: none;
    }
    .w-30pr{
        width: 100%;
    }
    .w-60pr{
        width: 100%;
        margin-top: 20px;
    }
    .p-15px{
        padding: 10px;
    }
    .card-car:hover .car__icons {
        display: none;
    }
    .car__verified{
        display: none;
    }
    .w-33pr{
        width: 50%;
    }
    .car__owner{
        display: block;
        border-bottom: 1px solid rgb(203, 203, 203);
        border-top: 1px solid rgb(203, 203, 203);
    }
    .comp{
        display: block;
    }
}

</style>
