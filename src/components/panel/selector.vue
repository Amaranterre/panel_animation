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
  <div class="panel_frame">
    <div class="panel">
      <img class="static1" src="/src/assets/panel_img/static/chunk0.png">
      <img class="static2" src="/src/assets/panel_img/static/comp0.png">
    </div>
    
  </div>
  
</template>

<style>
  .panel_frame {
    display: flex;
    align-items: center;
    justify-content: flex-start; /* 靠左对齐 */
    height: 100%; /* 确保容器有足够的高度 */
  }

  .panel {
    /* position:absolute; */
    position:absolute;
    display: flex;

    height: 70%;
    width: auto;
  }
  .panel > .static1 {
    all:inherit;
    z-index: 0;
  }      
  .panel > .static2 {
    all:inherit;
    z-index: 1;
  }
</style>

