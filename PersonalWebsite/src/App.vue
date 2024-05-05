
<template>
  <header>
    <Navigator />
  </header>

    <MainPage />


  <foot>

  </foot>
</template>


<script setup>
import Navigator from './components/head.vue';
import MainPage from './components/MainPage.vue'



</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  /* background: linear-gradient(to right, #105bb0 0%, #012043 100%); */



}
</style>
