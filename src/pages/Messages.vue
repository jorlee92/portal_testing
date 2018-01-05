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
import { mapActions, mapGetters } from 'vuex'
import ChatMessage from '@/components/ChatMessage'
export default {
  components: {
    ChatMessage,
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
