<template>
  <div class="q-mt-lg">
    <div class="conatiner">
      <div class="contend q-gutter-md  row justify-between">
        <!-- car name boshlanishi -->
        <div class="contend__car__much" v-for="i in 5" :key="i">
          <div>
            <ul>
            <li class="text-body1">
              Mersedes <span class="text-grey text-body1">{{ much }}</span>
            </li>
            <li class="text-body1">
              Mersedes <span class="text-grey text-body1">{{ much }}</span>
            </li>
            <li class="text-body1">
              Mersedes <span class="text-grey text-body1">{{ much }}</span>
            </li>
            <li class="text-body1">
              Mersedes <span class="text-grey text-body1">{{ much }}</span>
            </li>
            <li class="text-body1">
              Mersedes <span class="text-grey text-body1">{{ much }}</span>
            </li>
            <li class="text-body1">
              Mersedes <span class="text-grey text-body1">{{ much }}</span>
            </li>
            <li class="text-body1">
              Mersedes <span class="text-grey text-body1">{{ much }}</span>
            </li>
            <li class="text-body1">
              Mersedes <span class="text-grey text-body1">{{ much }}</span>
            </li>
            <li class="text-body1">
              Mersedes <span class="text-grey text-body1">{{ much }}</span>
            </li>
            <li class="text-body1">
              Mersedes <span class="text-grey text-body1">{{ much }}</span>
            </li>
          </ul>
          </div>
        </div>
         <!-- car name tugashi -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      much: 200,
    };
  },
};
</script>

<style  scoped>
.conatiner {
  width: 100%;
  height: auto;
}
.contend {
  width: 80%;
  height: auto;
  margin: 0 auto;
  /* background: red; */
}
ul li {
  list-style: none;
  line-height: 200%;
}
ul li:hover{
  cursor: pointer;
  color: red;
}
</style>
