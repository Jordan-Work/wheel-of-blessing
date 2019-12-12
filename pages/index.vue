<template>
  <div class="container">
    <div>
      <h1 class="title">
        Wheel Of Blessing
      </h1>
      <h2 class="subtitle">
        Game to find the hidden words
      </h2>
    </div>
    <Game-Container/>
  </div>
</template>

<script>
import GameContainer from '~/components/GameContainer.vue'

export default {
  components: {
    GameContainer
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
