<script setup>
  import { ref } from 'vue';

  import stchunk from '/src/assets/imgpanel/static/panel.png';
  import animchunk1 from '/src/assets/imgpanel/animated/extending/chunk1.png';
  import animchunk2 from '/src/assets/imgpanel/animated/extending/chunk2.png';
  import animchunk3 from '/src/assets/imgpanel/animated/extending/chunk3.png';
  import animchunk4 from '/src/assets/imgpanel/animated/extending/chunk4.png';

defineProps({
  msg: String,
})


let isHovering=ref(false);


function mousein() {
  isHovering = true
  console.log("mousein")
};
</script>

<template>
  <div class="panel_frame">
    <div class="panel">
      <img class="static" :src="stchunk" />

      <img :class="{ 'hover-effect': isHovering }" class="anchunk" :src="animchunk1" />

      
    </div>


    <div    class="det1"
            @mouseover="isHovering = true"
            @mouseleave="isHovering = false">
    </div>
  </div>
  
  <!-- <input type="button" @click="clicked()" value="CLICK ME" style="z-index: 2; position: absolute;"> -->

  
  
</template>

<style>
  .panel_frame {
    align-items: center;
    position:absolute;

    /* justify-content: flex-start; 靠左对齐 */
    height: 100%; /* 确保容器有足够的高度 */
    width: 100%;
    z-index: 0;
  }

  .panel {
    position:absolute;
    /* position: relative; */
    display: flex;

    top: 10%;
    left: 50%;

    height: 80%;
    width: 80%;
    margin: 0;

    z-index: 0;
  }
  .panel > .static {
    height: 100%;
    width: auto;
    position: absolute;

  }

  .anchunk {
     height: 100%;
     width: auto;
     position: absolute;
     top: 0%;
     left: 0%;

      z-index: 4;
      
      transition: all 0.8s ease;
  }
  .panel > .anim1{
    position: absolute;
    height: 100%;
    width:  100%;

    z-index: 6;
    
    
  }
  .hover-effect {
    left: 30px;
    top: -60px; 

    
  }


  .panel_frame > .det1 {
    position:absolute;
    /* position: relative; */
    display: flex;

    left: 50%;

    height: 40%;
    width: 30%;
    margin: 0;

    z-index: 0;
  }
</style>

