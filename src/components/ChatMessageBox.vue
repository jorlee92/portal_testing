
<template lang="html">
    <div class="container">
        <div class="field">
  <label class="label">Message</label>
  <div class="control">
    <textarea class="textarea" placeholder="Enter a message" v-model="text"></textarea>
    <button class="button" v-on:click="getText(text)">Send</button>
  </div>
</div>
    </div>
</template>
<script>
export default {
  props: [
    'project',
  ],
  data: function () {
    return {
      text: '',
    }
  },
  methods: {
    getText: (text) => {
      console.log(text)
    },
  },
  name: 'chat-message-box',
}
</script>

<style lang="sass">
</style>