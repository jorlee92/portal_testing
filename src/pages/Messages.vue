<template>
  <div>
    <h1>Messages Page</h1>
      <ChatMessage
        v-for="(message, id) in messages"
        :id = 'id'
        :key= 'id'
        :message = 'message'
    />
  <ChatMessageBox
  
  />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ChatMessage from '@/components/ChatMessage'
import ChatMessageBox from '@/components/ChatMessageBox'
export default {
  components: {
    ChatMessage,
    ChatMessageBox,
  },
  mounted () {
    this.getProjectMessageList()
  },
  computed: {
    ...mapGetters({
      messages: 'getProjectMessageList',
    }),
  },
  methods: {
    ...mapActions([
      'getProjectMessageList',
    ]),
  },
}
</script>

<style lang="sass" scoped>
</style>
