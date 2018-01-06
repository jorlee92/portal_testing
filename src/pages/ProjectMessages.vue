<template>
  <div>
    <h1>Messages Page</h1>
      <ChatMessage
        v-for="(message, id) in messages"
        :id = 'id'
        :key= 'id'
        :message = 'message'
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
    return {
      id: this.$route.params.id,
    }
  },
  computed: {
    messages: function () {
      return this.getProjectMessageList(this.id)
    },
  },
}
</script>

<style lang="sass" scoped>
</style>
