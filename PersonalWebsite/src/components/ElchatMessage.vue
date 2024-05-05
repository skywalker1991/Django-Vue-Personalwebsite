<template>
    <div class="chat-message" :class="{ user: message.user }">
      <div class="message-content">{{ message.content }}</div>
    </div>
</template>

<script>
import { message } from 'ant-design-vue';

export default {
    props:{
        message: Object,
    }
}
</script>
  
<style scoped>
  .chat-message {
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
  }
  
  .user {
    background-color: #f0f0f0;
  }
  
  .bot {
    background-color: #e0e0e0;
  }
</style>
  