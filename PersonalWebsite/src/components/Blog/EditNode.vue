<template>
    <div class="addNode">
      
      <div class="currentNode">
        <p>请在图中选择父节点</p>
        <!-- <el-input v-model="currentNode.id" style="width: 240px" disabled/> -->
        <el-input v-model="currentNode.name" style="width: 240px" disabled/>
      </div>
      <div class="newNode">
        <el-input v-model="newNodeName" style="width: 240px" disable/>
      </div>
      <button @click="addnode()">增加节点</button>
      <!-- <div class="newNodeIido">
        <el-input v-model="newNodeValue.name" style="width: 240px" placeholder="请数据节点标签" />
        <el-input v-model="newNodeFather.name" style="width: 240px" placeholder="请在图中选择父节点" />
      </div> -->
    </div>

</template>


<script>
export default {
    data () {
        return {
            newNodeName:'',
        }
    },
    computed : {
        currentNode () {
            return this.$store.state.currentNode
        }
    },
    methods : {
        async addnode () {
            //对数据进行过滤，空数据不允许进行分析和处理，空数据报警等
            if (this.newNodeName == '') {
                alert('请输入新增加的标签名称！');  
            } else {
                const newNode = { "id":this.currentNode.id, "name":this.newNodeName}
                console.log(newNode)
                try {
                    const response = await fetch('api/blog/nodes/',{
                    method:'POST',
                    headers:{
                        'Content-Type': 'application/json',
                    },
                    body:JSON.stringify(newNode)
                    }
                    );
                    this.$store.commit(
                        'setneedfresh',true)
                } catch (error) {
                    console.error(error)
                } finally {
                    console.log('done!')
                }
            }


            //构建新增数据，父节点id,新增节点名称
            //调用增加节点api
            //自动更新视图

        }

    }
}

</script>


<style>


</style>