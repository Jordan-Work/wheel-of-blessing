<template>
  <div>
    <input id="letter-input" placeholder="Enter a Letter">
    <p>{{statement}}</p>
    
    <Game-Grid :gridWidth="gridWidth"
      :gridHeight="gridHeight"
      :message="defaultStatement" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import  GameGrid from './GameGrid.Vue'

export default {

  components: {
    GameGrid
  },
  computed: {
    ...mapState(['defaultStatement']),
    gridWidth() {
      return this.$store.state.minimumGridSize;
    },
    gridHeight() {
      // calc the grid rows for the size of the statement 
      return this.$store.state.defaultStatement.length / this.gridWidth + 1;
    },
  },
}
</script>