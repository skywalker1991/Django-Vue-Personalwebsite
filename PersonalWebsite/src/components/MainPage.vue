<template>
    <div class="mainpage">
        <component :is="currentComponent"></component>

    </div>
    <Dialog v-show="dialogshow"/>


</template>

<script>

import HomePage from './HomePage.vue'
import Dialog from './AiDialog.vue'
import BlogPage from './Blog/BlogPage.vue'
import BlogUpload from './Blog/BlogUpload.vue'

export default {
    components:{
        HomePage,
        Dialog,
        BlogPage,
        BlogUpload
    },
    data () {
        return {
            currentComponent:'HomePage', 
        }
    },
    computed : {
        currentComponent: function () {
            switch (this.$store.state.pageIndex) {
                case 0:
                    return 'HomePage'
                case 1:
                    return 'HomePage'
                case 2:
                    return 'BlogPage'
                case 4:
                    return 'BlogUpload'
            }
        },
        dialogshow: function () {
            return this.$store.state.dialogShow

        }
    }
}


</script>

<style>
.mainpage {
    position: relative;
    top: 60px;
    background-color: #0d1116;

}
</style>