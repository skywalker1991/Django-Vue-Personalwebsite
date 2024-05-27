<template>
    <div class="homepage">
        <Banner />
        <RowDisplay :rowTitle="rowTitle" :rowData="rowData" />
        <ColDisplay :colTitle="colTitle" :colData="colData" />

    </div>


</template>

<script>
import Banner from './Banner.vue'
import RowDisplay from './RowDisplay.vue'
import ColDisplay from './ColumnAniDisplay.vue'

export default {

    components:{
        Banner,
        RowDisplay,
        ColDisplay,
    },
    data () {
        return {
            rowTitle:'Ability',
            rowData:[
                {imgurl:'src/assets/radar.svg',title:'Military Background',des:''},
                {imgurl:'src/assets/security.svg',title:'Cyber Security',des:''},
                {imgurl:'src/assets/analysis.svg',title:'Data Analysis',des:''},
                {imgurl:'src/assets/github.svg',title:'Fullstack Development',des:''},
                {imgurl:'src/assets/language.svg',title:'Bilingual Ability',des:''},
            ],
            colTitle:'TimeLine',
            colData:[
                {title:'时间',des:'本科毕业于：北京理工大学本科毕业于：北京理工大学本科毕业于：北京理工大学本科毕业于：北京理工大学本科毕业于：北京理工大学'},
                {title:'时间',des:'本科毕业于：北京理工大学本科毕业于：北京理工大学本科毕业于：北京理工大学本科毕业于：北京理工大学本科毕业于：北京理工大学本科毕业于：北京理工大学'},
                {title:'时间',des:'本科毕业于：北京理工大学本科毕业于：北京理工大学本科毕业于：北京理工大学v本科毕业于：北京理工大学本科毕业于：北京理工大学'},
                {title:'时间',des:'本科毕业于：北京理工大学本科毕业于：北京理工大学v本科毕业于：北京理工大学本科毕业于：北京理工大学'},

            ]
        }
    }  
}

</script>

<style>

hr {
        border: none;      /* 移除默认边界 */
        height: 2px;       /* 设置线的高度 */
        background-color: #333; /* 设置线的颜色 */
        margin: 20px auto;    /* 设置上下外边距 */
        width: 95%;
    }

.homepage {
    background-color: #0d1116;
    
}

</style>