<template>
  <div>
    <h1>Messaging
    </h1>
    <div class="messaging-nav">
      <router-link 
        tag='button' 
        class="button is-info" 
        :to="{ name: 'PersonalMessages'}"
      >
        View PMS
      </router-link>
      <router-link 
        v-if='isAuthed' 
        tag='button' 
        class="button is-primary new-project-link" 
        :to="{ name: 'MessageNew'}"
      >
        New Message
      </router-link>
    </div>
    </br>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'isAuthed',
    ]),
  },
}
</script>

