<template>
<div class = "card-wrapper">
  <div class = "card">
    <!-- card left -->
    <div class="q-pa-md">
    <q-carousel
      swipeable
      animated
      v-model="slide"
      thumbnails
      infinite
    >
      <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
      <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
    </q-carousel>
  </div>
    <!-- card right -->
    <div class = "product-content">
      <h2 class = "product-title">{{ car.car_name }}</h2>
      <a href = "#" class = "product-link"><b>Price:</b>  {{ car.price }} $</a>

      <div class = "product-price">
        <p class = "last-price">Name: <span> {{ car.author_name }}</span></p>
        <p class = "new-price">Number: <span>{{ car.author_number }}</span></p>
      </div>

      <div class = "product-detail">
        <h3>Seller's comment</h3>
        <p>{{ car.car_equipment }} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae laboriosam temporibus iste, ratione molestiae quas expedita explicabo laborum facere aut.</p>
        <p>{{ car.car_equipment }}</p>
        <ul>
          <li>Color: <span>{{ car.color }}</span></li>
          <li>Mileage: <span>{{ car.mileage }} km</span></li>
          <li>Body <span>{{ car.body }}</span></li>
          <li>Transmission: <span>{{ car.transmission }}</span></li>
          <li>Motor: <span>{{ car.motor }}</span></li>
          <li>Year: <span>{{ car.year_of_manufacture }}</span></li>
        </ul>
      </div>

      <div class = "purchase-info">
        <button type = "button" class = "btn">
          Get in touch
        </button>
        <button type = "button" class = "btn">Compare</button>
      </div>

      <div class = "social-links row">
        <b class="q-mr-sm">Manzil:</b> <span style="font-weight: 450;"> {{ car.city }}</span>
      </div>
    </div>
  </div>
</div>
</template>
<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router';
import { useCounterStore } from "src/stores/index";
import axios from 'axios';
const store = useCounterStore();
store.getApi();
const slide = ref(1)
const id = useRoute().params.id
const car = ref({})
let  getApiCarForId = async()=>{
  const car_api = await axios.get('http://autouz.pythonanywhere.com/productlar/'+id+ '/')
  console.log(car_api.data)
  car.value  = car_api.data
}
getApiCarForId()

</script>
<style scoped>

.card-wrapper{
    width: 90%;
    margin: 100px auto;
}
img{
    width: 100%;
    display: block;
}
.img-display{
    overflow: hidden;
}
.img-showcase{
    display: flex;
    width: 100%;
    transition: all 0.5s ease;
}
.img-showcase img{
    min-width: 100%;
}
.img-select{
    display: flex;
}
.img-item{
    margin: 0.3rem;
}
.img-item:nth-child(1),
.img-item:nth-child(2),
.img-item:nth-child(3){
    margin-right: 0;
}
.img-item:hover{
    opacity: 0.8;
}
.product-content{
    padding: 2rem 1rem;
}
.product-title{
    font-size: 3rem;
    text-transform: capitalize;
    font-weight: 700;
    position: relative;
    color: #12263a;
    margin: 0.5rem 0;
}
.product-title::after{
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 4px;
    width: 80px;
    background: #12263a;
}
.product-link{
    text-decoration: none;
    font-weight: 400;
    font-size: 20px;
    display: inline-block;
    margin-bottom: 0.5rem;
    background: #256eff;
    color: #fff;
    padding: 0 0.3rem;
    transition: all 0.5s ease;
}
.product-link:hover{
    opacity: 0.9;
}
.product-rating{
    color: #ffc107;
}
.product-rating span{
    font-weight: 600;
    color: #252525;
}
.product-price{
    margin: 1rem 0;
    font-size: 1rem;
    font-weight: 700;
}
.product-price span{
    font-weight: 400;
}
.last-price span{
  font-weight: 500;
  /* sasaks */
}
.new-price span{
    color: #256eff;
}
.product-detail h3{
    text-transform: capitalize;
    color: #12263a;
    font-size: 2rem;
}
.product-detail p{
    font-size: 0.9rem;
    padding: 0.3rem;
    opacity: 0.8;
}
.product-detail ul{
    margin: 1rem 0;
    font-size: 0.9rem;
}
.product-detail ul li{
    margin: 0;
    list-style: none;
    background: url(https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/checked.png) left center no-repeat;
    background-size: 18px;
    padding-left: 1.7rem;
    margin: 0.4rem 0;
    font-weight: 600;
    opacity: 0.9;
}
.product-detail ul li span{
    font-weight: 400;
}
.purchase-info{
    margin: 1.5rem 0;
}
.purchase-info input,
.purchase-info .btn{
    border: 1.5px solid #ddd;
    border-radius: 25px;
    text-align: center;
    padding: 0.45rem 0.8rem;
    outline: 0;
    margin-right: 0.2rem;
    margin-bottom: 1rem;
}
.purchase-info input{
    width: 60px;
}
.purchase-info .btn{
    cursor: pointer;
    color: #fff;
}
.purchase-info .btn:first-of-type{
    background: rgb(2, 177, 2);
}
.purchase-info .btn:last-of-type{
    background: #f64749;
}
.purchase-info .btn:hover{
    opacity: 0.9;
}

@media screen and (min-width: 992px){
    .card{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5rem;
    }
    .card-wrapper{
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .product-imgs{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .product-content{
        padding-top: 0;
    }
}
</style>
