<script setup>
import {ref} from 'vue';
import Panel from './components/panel/selector.vue';


</script>

<template>
  <div class="bg-frame">
      <Panel />
    
  </div>
  
  
</template>


<style>
.bg-frame {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  zoom: 1;
  background-color: rgb(0, 0, 0);
  background-size: cover;
}

</style>