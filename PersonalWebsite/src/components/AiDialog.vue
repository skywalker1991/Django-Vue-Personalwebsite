<template>
    <div class="dialog">

      <el-card>
        <el-card-header>
          <span>与dAI对话</span>
        </el-card-header>

        <el-card-body>
          <div class="chat-history" ref="chatHistory">
            <el-chat-message v-for="message in messages" :key="message.id" :message="message"></el-chat-message>

            <div class="chat-message">{{ line }}</div>
            
          </div>
          <div class="test">

      </div>

          <div class="chat-input">
            <el-input v-model="userInput" placeholder="Enter your message"></el-input>
            <el-button @click="getAnswer" :disabled="!validInput">Send</el-button>
          </div>
        </el-card-body>
      </el-card>



    </div>

</template>

<script>

import ElChatMessage from './ElchatMessage.vue'


export default {
    components:{
        ElChatMessage
    },
    data () {
        return {
            line:'',
            messages:[],
            loading:true,
            validinput:false,
            lines:[],
            userInput:'',
        }
    },
    computed :{
      validInput() {
        return !!this.userInput
      }


    },
    methods: {
      async getAnswer () {

        //构建messages
        this.messages.push({"role":"user","content":this.userInput})
        this.userInput = ''
        await this.fetchAiData()
        //

      },
      async fetchAiData () {

        try {
          const response = await fetch('http://127.0.0.1:8080/api/getanswer/',{
            method:'POST',
            headers:{
              'Content-Type': 'application/json',
            },
            body:JSON.stringify(this.messages)
          }

        );
          this.loading = false
          const reader = response.body.getReader();
          const decoder = new TextDecoder();
          let result= '';

          while (true) {
            const {done,value} = await reader.read();
            if (done) break;
            result += decoder.decode(value,{stream:true});
            this.line = result
          }
          this.messages.push({"role":"assistant","content":this.line})
          this.line=''
        } catch (error) {
          console.error(error)
        } finally {
          this.loading = false
        }

      },

    }
}

</script>


<style>
.dialog {
    position:fixed;
    top: 70px;
    right: 20px;
    width: 20vw;
    height:60vh;
    border-radius: 20px;
}

.chat-history {
  height: 50vh;
  overflow-y: auto;
  padding: 10px;
}

.chat-input {
  display: flex;
  margin-top: 10px;
}



.chat-input button {
  padding: 10px 15px;
  border: 1px solid #ccc;
  cursor: pointer;
}

.chat-message {
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
  }
</style>