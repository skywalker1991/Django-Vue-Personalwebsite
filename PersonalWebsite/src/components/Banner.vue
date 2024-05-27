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


export default {
  data () {
    return {
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
      if (this.$store.state.dialogShow == 1) {
        this.$store.commit('setdialogshow',0)
      }else {
        this.$store.commit('setdialogshow',1)
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
  margin-top: 200px;
}

.banner {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #0d1116;
  background-image: url('../assets/bannerback.png');
  background-size: cover;
  background-position: center;
  
}

.bannerbutton {
  margin: 60px;

}


</style>