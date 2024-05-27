<template>
    <div class="markdownedit">
        <MdEditor v-model="text" @onSave="onSave" :style="{height:editorHeight+'px'}"/>

        <el-dialog v-model="dialogFormVisible" title="Shipping address" width="500">
            <el-form :model="blogData">
                <el-form-item label="Blog title" :label-width="formLabelWidth">
                    <el-input v-model="blogData.title" autocomplete="off" />
                </el-form-item>
                <el-form-item label="Tag" :label-width="formLabelWidth">
                    <el-input v-model="blogData.tag" autocomplete="off" />
                </el-form-item>
            </el-form>
            <knowLedgeMap @node-clicked="handleNodeClicked"/>
            <template #footer>
                <div class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="uploadconfirm">Confirm </el-button>
                </div>
            </template>
        </el-dialog>
    </div>
    
</template>
  
<script>
import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import knowLedgeMap from './KnowledgeMap.vue'
  
export default {
    components : {
        MdEditor,
        knowLedgeMap,
    },
    data () {
        return {
            text:'## 标题一',
            editorHeight:768,
            dialogFormVisible:false,
            blogData:{
                title:'',
                author:'',
                tag:'',
            }
        }
    },
    mounted () {
        this.windowsize();

    },
    methods:{
        windowsize(){
            let windowHeight = window.innerHeight;  
            this.editorHeight = (windowHeight-60);

        },
        onSave (v,h) {
            this.dialogFormVisible = true;
        },
        async uploadconfirm () {
            this.dialogFormVisible = false;
            console.log(this.text);
            await this.upLoad();

        },
        async upLoad() {
            try {
                const response = await fetch('/api/blog/send-markdown/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ 
                        markdownText: this.text,
                        title:this.blogData.title,
                        author:this.blogData.author,
                        tag:this.blogData.tag,
                    })
                });
        
                if (response.ok) {
                    const responseData = await response.json();
                    console.log('Markdown sent successfully:', responseData);
                    alert('Markdown sent successfully!');
                } else {
                    throw new Error('Failed to send markdown');
                }
            } catch (error) {
                console.error('Error sending markdown:', error);
                alert('Error sending markdown. Please try again later.');
            }
        },
        handleNodeClicked (nodeData) {
            this.blogData.tag = nodeData.name
        }
    }
}


</script>

<style>
.markdownedit {
    margin: 10px;
    height: 900px;
}

</style>