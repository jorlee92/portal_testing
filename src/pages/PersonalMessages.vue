<template>
  <div>
    <h1>PM Page</h1>
      <ChatMessage 
        :message = 'test_message'
        :id = 1
      />


  </div>
</template>

<script>
import ChatMessage from '@/components/ChatMessage'
export default {
  components: {
    ChatMessage,
  },
  data () {
    var date = new Date('12/25/2017')
    return {
      test_message:
      { id: 1, text: 'Hey Jordan', sent: date },
    }
  },
}
</script>
