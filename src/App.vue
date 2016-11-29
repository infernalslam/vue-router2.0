<template>
  <div id="app">

    <md-bottom-bar class="md-accent" md-shift>
      <md-bottom-bar-item md-icon="ondemand_video" @click="movie()">Movies</md-bottom-bar-item>
      <md-bottom-bar-item md-icon="music_note" @click="music()">Music</md-bottom-bar-item>
      <md-bottom-bar-item md-icon="books" md-active>Books</md-bottom-bar-item>
      <md-bottom-bar-item md-icon="photo">Pictures</md-bottom-bar-item>
    </md-bottom-bar>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  methods: {
    movie () {
      this.$router.push({ path: '/page1' })
    },
    music () {
      this.$router.push({ path: '/page2' })
    }
  }
}
</script>
