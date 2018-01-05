<template lang="html">
        <div style="padding-top: 15px" class="message columns">
          <div class="profile-pic-container column is-2">
              <a href="#profile"><img class="image" src="https://qph.ec.quoracdn.net/main-qimg-87001d2ce810c2f48c97032cbc905939"></a>
          </div>
          <div class="message-container">
            <div class="message-body">
                {{message.text}}
                </br>
              </div>
            <footer class="message-details">
                {{ message.sent.toDateString() }}
            </footer>
        </div>
          </div>
</template>


<script>
export default {
  props: [
    'id',
    'message',
  ],
  name: 'chat-message',
}
</script>

<style lang="css">

.message-container {
    min-height:100%;
    flex-direction: column;
    display:flex;
}
.message-body {
    flex: 1;
    border:none;
    padding: 0 0;
}
</style>
