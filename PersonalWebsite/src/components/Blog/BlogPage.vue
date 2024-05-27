<template>
    <div class="Blogdisplay">
        <div class="Knowledgemap">
            <knowledgemap @node-clicked="handleNodeClicked"/>
            <editnode />  
        </div>
        <div class="Bloglist">
            <!-- <p>{{ selectedMapData }}</p> -->
        </div>
        <div class="Sidebar">
            <p>sidebar</p>
        </div>


        
        

    </div>

  </template>
  
  <script>
  import 'md-editor-v3/lib/style.css';
  import knowledgemap from './KnowledgeMap.vue'
  import editnode from './EditNode.vue'



  export default {
    components : {
        knowledgemap,
        editnode,


    },
    data () {
        return {
            selectedMapData:null
        }
    },
    methods:{
        handleNodeClicked(nodedata) {
            this.selectedMapData = nodedata
            console.log(this.selectedMapData)
        }
    }
  }
  </script>

<style>
.Blogdisplay {
    display: flex;
    height: 100%;
}

.Knowledgemap {
    mask: linear-gradient(to left, transparent, black); /* 使用线性渐变作为蒙版 */
}



</style>