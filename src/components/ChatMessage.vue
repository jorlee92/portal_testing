<template lang="html">
        <div style="padding-top: 15px" class="message columns">
          <div class="profile-pic-container column is-2">
              <a href="#profile"><img class="image" src="https://qph.ec.quoracdn.net/main-qimg-87001d2ce810c2f48c97032cbc905939"></a>
          </div>
            <div class="column message-body">
                {{message.text}}
                </br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                <footer class="message-details">
                    Sent 1/3/2018 @ 10:56 by jorlee92
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

<style lang="sass">
</style>
