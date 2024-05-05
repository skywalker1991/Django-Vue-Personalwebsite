<template>
  <div class="banner">
   
    <img src="../assets/photo.jpg" alt="Banner image" id="bannerimage">
    <div style="display: inline;margin-top: 60px;">
      <div ref="typedElement" class="headline"></div>
    </div>
    <el-button type="primary" class="bannerbutton" round size="large" @click="openAiDialog()">和我聊聊<el-icon><Right/></el-icon></el-button>
  </div>


    <!-- <video id="backgroundVideo" autoplay muted loop>
        <source src="../assets/IMG_2161.mp4" type="video/mp4">
    </video> -->


</template>

<script>
import Typed from 'typed.js'
import { store } from '../js/store.js'

export default {
  data () {
    return {
      store,
    }
  },
  mounted() {
    const typedElement = this.$refs.typedElement;
    const typedInstance = new Typed(typedElement, {
      autoInsertCss:true,
      showCursor:true,
      cursorChar:'|',
      strings: ['Stay Hungry^500  Stay Foolish','求知若渴^1000  大智若愚'],
      typeSpeed: 70, // Adjust typing speed as needed
      loop: true,
    });



  },
  methods:{
    openAiDialog () {
      if (this.store.DialogShow == 1) {
        this.store.DialogShow = 0
      }else {
        this.store.DialogShow = 1
      }
    }

  }
}

</script>

<style>
.headline {
    font-size: 70px;
    display: inline;
    font-family: Georgia, serif;


}
.typed-cursor {
    font-size: 70px;
    animation: blink .7s infinite;
}
@keyframes blink {
    0% {
            opacity: 1;
    }
    50% {
            opacity: 0;
    }
    100% {
            opacity: 1;
    }
    
}
#bannerimage {
  width: 300px;
  height: 300px;
  border-radius: 150px;
  margin-top: 60px;
}

.banner {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bannerbutton {
  margin: 60px;

}


</style>