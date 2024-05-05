<template>
  <div class="search-input">
  <el-input
    v-model="input" 
    style="width: 240px" 
    placeholder="Search"
    clearable
    prefix-icon="Search"
  >
  <template #append>
    <el-button icon="Search" />
  </template>
  </el-input>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input:''
    }
  }
}


</script>

<style>
.search-input {
  height: 100 px;
}
</style>