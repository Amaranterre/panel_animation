<script setup>
import Panel from './components/panel/selector.vue'
</script>

<template>
  <div class="bg-frame">
    <div class="bg-core">
      <Panel />
    </div>
  </div>
  
</template>


<style>
.bg-frame {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
  zoom: 1;
  background-color: rgb(0, 0, 0);
}

.bg-core {
  position: fixed;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
  zoom: 1;
  background-size: cover;
  
}
</style>