<script setup>
  import { ref } from 'vue';

  import stchunk from '/src/assets/imgpanel/static/panel.png';
  import animchunk1 from '/src/assets/imgpanel/animated/extending/chunk1.png';
  import animchunk2 from '/src/assets/imgpanel/animated/extending/chunk2.png';
  import animchunk3 from '/src/assets/imgpanel/animated/extending/chunk3.png';
  import animchunk4 from '/src/assets/imgpanel/animated/extending/chunk4.png';

  import usericon from '/src/assets/icon/wh_userprofile.png'
  import workicon from '/src/assets/icon/wh_homework.png'
  import rankicon from '/src/assets/icon/wh_rank.png'
  import infoicon from '/src/assets/icon/wh_aboutus.png'

defineProps({
  msg: String,
})


let isHovering1=ref(false);
let isHovering2=ref(false);
let isHovering3=ref(false);
let isHovering4=ref(false);
const deactive_opaity = 0.3
const active_opacity = 0.7

</script>

<template>
  <div class="panel_frame">
    <div class="panel">
      <div class="icon icon-pos3">
        <img class="icon trans-icon" :style="{ 'opacity': isHovering3 ? active_opacity:deactive_opaity}" :class="{ 'iconhover': isHovering3}" :src="usericon" />
      </div>
      <div class="icon icon-pos4">      
        <img class="icon trans-icon" :class="{ 'iconhover': isHovering4}" :style="{ 'opacity': isHovering4 ? active_opacity:deactive_opaity}" :src="workicon" />
      </div>
      <img class="icon icon-pos1 trans-icon" :style="{ 'opacity': isHovering1 ? active_opacity:deactive_opaity}" :class="{ 'iconhover': isHovering1}":src="rankicon" />
      <img class="icon icon-pos2 trans-icon" :style="{ 'opacity': isHovering2 ? active_opacity:deactive_opaity}" :class="{ 'iconhover': isHovering2}":src="infoicon" />
      <img class="panel-compo" :src="stchunk" />

      <img :class="{ 'extend1': isHovering1 }" class="panel-compo trans-extend" :src="animchunk1" />
      <img :class="{ 'extend2': isHovering2 }" class="panel-compo trans-extend" :src="animchunk2" />
      <img :class="{ 'extend3': isHovering3 }" class="panel-compo trans-extend" :src="animchunk3" />
      <img :class="{ 'extend4': isHovering4 }" class="panel-compo trans-extend" :src="animchunk4" />

      
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
  .panel-compo {
    height: 37em;
    width: auto;
    position: absolute;
    top: 0%;
    left: 0%;
  }

  .icon {
    height: 5em;
    width: 5em;
    position: absolute;


  }
  .icon-pos1 {
    top: -1em;
    left: -1em;
  }
  .icon-pos2 {
    top: -1em;
    left: 34em;
  }
  .icon-pos3 {
    top: 24em;
    right: -42em;
  }
  .icon-pos4 {
    top: 25em;
    right: 2em;
  }
  .iconhover {
    transform: translateY(-1em);
  }
  .trans-icon {
    transition: all 0.4s ease-in-out;
  }
  

  .trans-extend {
      transition: all 0.8s cubic-bezier(0.1, 0.6, 0.7, 2);
  }
  .extend1 {
    left: -30px;
    top: -30px; 
  }
  .extend2 {
    left: 30px;
    top: -30px; 
  }
  .extend3 {
    left: 50px;
    top: 30px; 
  }
  .extend4 {
    left: -30px;
    top: 20px; 
  }


  .panel_frame > .det1 {
    position:absolute;

    left: 50%;

    height: 35%;
    width: 25%;
    margin: 0;

    z-index: 0;
  }
  .panel_frame > .det2 {
    position:absolute;

    left: 80%;
    height: 40%;
    width: 25%;
    margin: 0;

    z-index: 0;
  }
  .panel_frame > .det3 {
    position:absolute;
    top: 45%;
    left: 80%;

    height: 45%;
    width: 25%;
    margin: 0;

    z-index: 0;
  }
  .panel_frame > .det4 {
    position:absolute;

    top: 40%;
    left: 50%;

    height: 45%;
    width: 25%;
    margin: 0;

    z-index: 0;
  }
</style>

