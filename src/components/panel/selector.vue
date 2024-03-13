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


let isHovering1=ref(false);
let isHovering2=ref(false);
let isHovering3=ref(false);
let isHovering4=ref(false);

</script>

<template>
  <div class="panel_frame">
    <div class="panel">
      <img class="static" :src="stchunk" />

      <img :class="{ 'hover1': isHovering1 }" class="anchunk" :src="animchunk1" />
      <img :class="{ 'hover2': isHovering2 }" class="anchunk" :src="animchunk2" />
      <img :class="{ 'hover3': isHovering3 }" class="anchunk" :src="animchunk3" />
      <img :class="{ 'hover4': isHovering4 }" class="anchunk" :src="animchunk4" />

      
    </div>


    <div    class="det1"
            @mouseover="isHovering1 = true"
            @mouseleave="isHovering1 = false">
    </div>
    <div    class="det2"
            @mouseover="isHovering2 = true"
            @mouseleave="isHovering2 = false">
    </div>
    <div    class="det3"
            @mouseover="isHovering3 = true"
            @mouseleave="isHovering3 = false">
    </div>
    <div    class="det4"
            @mouseover="isHovering4 = true"
            @mouseleave="isHovering4 = false">
    </div>
  </div>
  
  <!-- <input type="button" @click="clicked()" value="CLICK ME" style="z-index: 2; position: absolute;"> -->

  
  
</template>

<style>
  .panel_frame {
    align-items: center;
    position: relative;

    /* justify-content: flex-start; 靠左对齐 */
    height: 100%; /* 确保容器有足够的高度 */
    width: 100%;
    z-index: 0;

    overflow: hidden;
  }

  .panel {
    position:absolute;
    /* position: relative; */
    display: flex;

    top: 10%;
    left: 50%;

    height: 80%;
    width: 0%;
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
      
      transition: all 0.8s cubic-bezier(0.1, 0.6, 0.7, 2);
  }
  .hover1 {
    left: -30px;
    top: -30px; 
  }
  .hover2 {
    left: 30px;
    top: -30px; 
  }
  .hover3 {
    left: 30px;
    top: 30px; 
  }
  .hover4 {
    left: -30px;
    top: 30px; 
  }


  .panel_frame > .det1 {
    position:absolute;
    /* position: relative; */
    display: flex;

    left: 50%;

    height: 35%;
    width: 25%;
    margin: 0;

    z-index: 0;
  }
  .panel_frame > .det2 {
    position:absolute;
    /* position: relative; */
    display: flex;

    left: 80%;

    height: 40%;
    width: 25%;
    margin: 0;

    z-index: 0;
  }
  .panel_frame > .det3 {
    position:absolute;
    /* position: relative; */
    display: flex;

    top: 45%;
    left: 80%;

    height: 45%;
    width: 25%;
    margin: 0;

    z-index: 0;
  }
  .panel_frame > .det4 {
    position:absolute;
    /* position: relative; */
    display: flex;

    top: 40%;
    left: 50%;

    height: 45%;
    width: 25%;
    margin: 0;

    z-index: 0;
  }
</style>

