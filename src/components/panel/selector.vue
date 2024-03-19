<script setup>
  import { ref } from 'vue';

  import stchunk from '/src/assets/imgpanel/static/panel.png';
  import animchunk1 from '/src/assets/imgpanel/animated/extending/chunk1.png';
  import animchunk2 from '/src/assets/imgpanel/animated/extending/chunk2.png';
  import animchunk3 from '/src/assets/imgpanel/animated/extending/chunk3.png';
  import animchunk4 from '/src/assets/imgpanel/animated/extending/chunk4.png';

  import usericon from '/src/assets/icon/user.svg'
  import workicon from '/src/assets/icon/homework.svg'
  import rankicon from '/src/assets/icon/rank.svg'
  import infoicon from '/src/assets/icon/aboutus.svg'

defineProps({
  msg: String,
})


let isHovering1=ref(false);
let isHovering2=ref(false);
let isHovering3=ref(false);
let isHovering4=ref(false);
const deactive_opaity = 0.3
const active_opacity = 0.9

</script>

<template>
  <div class="panel_frame">
    <div class="panel">

      

      <!-- 静态圆盘组件 -->
      <img class="panel-compo" :src="stchunk" />


      <!-- 动态圆盘组件 -->
      <img :class="{ 'extend1': isHovering1 }" class="panel-compo trans-extend" :src="animchunk1" />
      <img :class="{ 'extend2': isHovering2 }" class="panel-compo trans-extend" :src="animchunk2" />
      <img :class="{ 'extend3': isHovering3 }" class="panel-compo trans-extend" :src="animchunk3" />
      <img :class="{ 'extend4': isHovering4 }" class="panel-compo trans-extend" :src="animchunk4" />


      <!-- 鼠标位置检测部分 -->
      <div    
        class="panel-pos1 detector-size"
        @mouseover="isHovering1 = true"
        @mouseleave="isHovering1 = false">
      </div>
      <div    
        class="panel-pos2 detector-size"
        @mouseover="isHovering2 = true"
        @mouseleave="isHovering2 = false">
      </div>
      <div  
        class="panel-pos3 detector-size"
        @mouseover="isHovering3 = true"
        @mouseleave="isHovering3 = false">
      </div>
      <div    
        class="panel-pos4 detector-size"
        @mouseover="isHovering4 = true"
        @mouseleave="isHovering4 = false">
      </div>
    </div>

      
    <!-- 四个图标组件 -->
    <div class="icon-wrapper panel-pos3">
      <img class="icon trans-icon ":style="{ 'opacity': isHovering3 ? active_opacity:deactive_opaity}" :class="{ 'iconhover': isHovering3}" :src="usericon" />
      <Transition name="icon-text">
        <p v-if="isHovering3" class="icon-text">用户</p>
      </Transition>
    </div>
    <div class="icon-wrapper panel-pos4">
      <img class="icon trans-icon" :style="{ 'opacity': isHovering4 ? active_opacity:deactive_opaity}" :class="{ 'iconhover': isHovering4}" :src="workicon" />
      <Transition name="icon-text">
        <p v-if="isHovering4" class="icon-text">题库</p>
      </Transition>
    </div>
    <div class="icon-wrapper panel-pos1">
      <img class="icon trans-icon" :style="{ 'opacity': isHovering1 ? active_opacity:deactive_opaity}" :class="{ 'iconhover': isHovering1}" :src="rankicon" />
      <Transition name="icon-text">
        <p v-if="isHovering1" class="icon-text">排行榜</p>
      </Transition>
    </div>
    <div class="icon-wrapper panel-pos2">
      <img class="icon trans-icon" :style="{ 'opacity': isHovering2 ? active_opacity:deactive_opaity}" :class="{ 'iconhover': isHovering2}" :src="infoicon" />
      <Transition name="icon-text">
        <p v-if="isHovering2" class="icon-text">关于我们</p>
      </Transition>
    </div>

    
  </div>
  
  <!-- <input type="button" @click="clicked()" value="CLICK ME" style="z-index: 2; position: absolute;"> -->

  
  
</template>

<style>
  .panel_frame {
    align-items: center;
    position: absolute;

    /* justify-content: flex-start; 靠左对齐 */
    /* height: 10%; 确保容器有足够的高度 */
    /* width: 50%; */

    /* padding-top是根据页面宽度作为分母的，因此在屏幕过宽时会出问题*/
    top:50%;
    left:75%;

    padding-top: 40%;
    padding-left: 45%;

    z-index: 0;

    overflow: hidden;

    transform: translate(-50%,-50%);
  }

  .panel {
    position:absolute;
    /* position: relative; */
    display: flex;

    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

    height: 80%;
    width: 80%;
    margin: 0;

    z-index: 0;
  }
  .panel-compo {

    height: 100%;
    width: auto;

    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
  }

  .icon {
    height: 100%;
    width: 100%;
    position: absolute;
  }
  .icon-wrapper {
    height: 10%;
    width: 10%;
    position: absolute;
  }
  .panel-pos1 {
    top:5%;
    left:5%;
  }
  .panel-pos2 {
    top:5%;
    left:95%;
    transform: translate(-100%,0);
  }
  .panel-pos3 {
    top:85%;
    left:95%;
    transform: translate(-100%,-100%);
  }
  .panel-pos4 {
    top:85%;
    left:5%;
    transform: translate(0,-100%);
  }
  .iconhover {
    transform: translateY(-50%);
    /* transform: scale(1.2); */

  }
  .trans-icon {
    top:0%;
    left:0%;
    transition: all 0.4s ease-in-out;
  }
  .icon-text-enter-active,
  .icon-text-leave-active {
    transition: all 0.4s ease-in-out;
  }
  .icon-text-enter-from,
  .icon-text-leave-to {
    opacity: 0;
  }
  .icon-text {
    margin:0%; 
    width:300%;

    font-size: 1.5vw;
    font-weight: bold;
    
    position: absolute;
    bottom: 0%;
    left: 50%;
    transform: translate(-50%,0%);
  }
  

  .trans-extend {
      transition: all 0.8s cubic-bezier(0.1, 0.6, 0.7, 2);
  }
  .extend1 {
    /* 参数是调过地的 */
    transform: translate(-55%,-55%);
  }
  .extend2 {
    transform: translate(-45%,-55%);
  }
  .extend3 {
    transform: translate(-42%,-45%);
  }
  .extend4 {
    transform: translate(-55%,-45%);
  }


  .detector-size {
    position:absolute;
    height: 50%;
    width: 50%;
    margin: 0;

    z-index: 5;
  }
</style>

