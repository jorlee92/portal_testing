<template>
  <div>
    <h1>Project Messages Page</h1>
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
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    ChatMessage,
  },
  mounted () {
    this.getProjectMessageList(this.id)
  },
  beforeDestroy () {
    this.resetProjectMessages()
  },
  data () {
    return {
      id: this.$route.params.id,
    }
  },
  computed: {
    ...mapGetters({
      messages: 'getProjectMessageList',
    }),
  },
  methods: {
    ...mapActions([
      'getProjectMessageList',
      'resetProjectMessages',
    ]),
  },
}
</script>

<style lang="sass" scoped>
</style>
