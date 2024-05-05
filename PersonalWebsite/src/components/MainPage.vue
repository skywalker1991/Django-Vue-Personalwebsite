<template>
    <div class="mainpage">
        <component :is="currentComponent"></component>

    </div>
    <Dialog v-show="store.DialogShow"/>


</template>

<script>
import { store } from '../js/store.js'
import HomePage from './HomePage.vue'
import Dialog from './AiDialog.vue'

export default {
    components:{
        HomePage,
        Dialog,
    },
    data () {
        return {
            currentComponent:'HomePage',
            store,
        }
    },
    computed : {
        currentComponent: function () {
            switch (store.PageIndex) {
                case 0:
                    return 'HomePage'
                case 1:
                    return 'HomePage'
                case 2:
                    return 'BlogPage'
            }
        }
    }
}


</script>

<style>
.mainpage {
    position: relative;
    top: 60px;

}
</style>