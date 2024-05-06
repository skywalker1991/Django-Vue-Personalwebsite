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
                {imgurl:'src/assets/radar.svg',title:'Military Background',des:'Served 7 years in both Cybersecurity and Intelligence Department of the CAF HQ.'},
                {imgurl:'src/assets/security.svg',title:'Cyber Security',des:'Got bachelor degree in Cryptograph and master degree in Computer Science.'},
                {imgurl:'src/assets/analysis.svg',title:'Data Analysis',des:'Proficient in utilizing statistical and machine learning algorithms to process, analyze, and visualize data.'},
                {imgurl:'src/assets/github.svg',title:'Fullstack Development',des:'Proficient in full-stack development, capable of independently developing web systems and applications.'},
                {imgurl:'src/assets/language.svg',title:'Bilingual Ability',des:'Strong English communication skills, proficient in English as a working language, with an IELTS score of 7.'},
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