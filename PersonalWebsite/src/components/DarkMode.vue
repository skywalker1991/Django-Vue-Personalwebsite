<template>
    <div class="dark-toggle">
        <el-icon class="dark-sub"><Sunny /></el-icon>
        <el-switch v-model="isDark" class="dark-sub"/>
        <el-icon class="dark-sub"><Moon /></el-icon>
    </div>
</template>

<script>

import { useDark } from '@vueuse/core'
const isDark = useDark()

export default {
    data () {
        return {
            isDark:isDark
        }
    }
}




</script>

<style>
.dark-toggle {
    display: flex;
    align-items: center;
}

.dark-sub {
    margin-left: 5px;
}

</style>