<script setup>
import { ref } from 'vue';
// import chunk0 from '/src/assets/panel_img/static/chunk0.png';
// import comp0 from '/src/assets/panel_img/static/comp0.png';

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="out">
    <img class="static_picture1" src="/src/assets/panel_img/static/chunk0.png">
    <img class="static_picture2" src="/src/assets/panel_img/static/comp0.png">
  </div>
  
</template>

<style>
  .out {
    display: flex;
    align-items: center;
    justify-content: flex-start; /* 靠左对齐 */
    height: 100%; /* 确保容器有足够的高度 */
    
    
    
  }
  .picture {
    /* position:absolute; */

    height: 70%;
    width: auto;
  }
  .static_picture1 {
    position:absolute;
    display: flex;

    height: 70%;
    width: auto;

    z-index: 0;
  }      
  .static_picture2 {
    position:absolute;
    display: flex;

    height: 70%;
    width: auto;

    z-index: 1;
  }
</style>

