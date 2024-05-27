<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="selectItem"
  >
    <el-menu-item index="0">
      <p>DAIRUI</p>
    </el-menu-item>
    <el-menu-item index="1">Home</el-menu-item>
    <el-menu-item index="2">Blog</el-menu-item>
    <el-sub-menu index="3">
      <template #title>Projects</template>
      <el-menu-item index="2-1">Project1</el-menu-item>
      <el-menu-item index="2-2">Project2</el-menu-item>
      <el-menu-item index="2-3">Project3</el-menu-item>
      <el-menu-item index="2-4">Project4</el-menu-item>
    </el-sub-menu>

    <el-menu-item index="4">BlogUpload</el-menu-item>

    <div class="flex-grow"/>
    <SearchInput />
    <DarkMode />
    <LoginSignin />
    <el-button>AI助手</el-button>

  </el-menu>
</template>
  
<script>

import SearchInput from "./Search_input.vue"
import LoginSignin from "./LoginSignin.vue"
import DarkMode from "./DarkMode.vue"

export default {
  components: {
    SearchInput,
    LoginSignin,
    DarkMode,
  },
  data() {
    return {
      activeIndex:"1",
    }
  },
  methods:{
    selectItem(index) {
      switch (index) {
        case '0':
          this.$store.commit('setpageindex',0);
          // this.store.PageIndex = 0;
          break;
        case '1':
          this.$store.commit('setpageindex',1);
          break;
        case '2':
          this.$store.commit('setpageindex',2);
          break;
        case '4':
          this.$store.commit('setpageindex',4);
          break;
      }
      }
  }
}
     
</script>

<style>
.el-menu-demo {
  position: fixed !important;
  align-items: center;
  width: 100%;
  left:0;
  right: 0;
  z-index: 99;
  background: rgba(255, 255, 255, 0.2) !important;
  backdrop-filter: blur(10px)!important;

}
.flex-grow {
  flex-grow: 1;
}
</style>
  