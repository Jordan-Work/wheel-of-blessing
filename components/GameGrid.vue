<template>
  <div class="game-grid" :style="gridStyle">
    <ul v-for="count in gridItems" :key="count">
      <li>{{message[count-1]}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  props: {
    gridWidth: {
      type: Number
    },
    gridHeight: {
      type: Number
    },
    message: {
      type: String
    }
  },
  data() {
    return {
      gridStyle: {
        gridTemplateColumns: `repeat(${this.gridWidth}, 1fr)`,
        gridTemplateRows: `repeat(${this.gridHeight}, 1fr)`
      }
    }
  },
  methods: {

  },

  computed: {
    gridItems() {
      return this.gridWidth * this.gridHeight;
    }
  },
}
</script>

<style>
  .game-grid {
    display: grid;
  }
  ul > li {
    list-style-type: none;
  }
</style>