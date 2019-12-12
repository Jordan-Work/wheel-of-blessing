<template>
  <div class="game-grid" :style="gridStyle">
    <p v-for="count in gridItems" :key="count" :class="{'show-box': message[count-1] !== ' '}">
      <span :class="{'show-letter': handleFoundLetter.includes(message[count-1])}">{{message[count-1]}}</span>
    </p>
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
    },
    foundLetters: {
      type: Array
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
  computed: {
    gridItems() {
      return this.gridWidth * this.gridHeight;
    },
    handleFoundLetter() {
      return this.$store.state.lettersFound;
    }
  },
}
</script>

<style>
  .game-grid {
    display: grid;
  }
  .game-grid .show-box {
    background-color:#fff;
  }
  .game-grid p {
    border: 2px solid #777;
    background-color:#90ee90;
    display: flex;
    width: 4em;
    justify-content: center;
    align-items: center;
    height: 2.5em;
  }
  .game-grid span {
    visibility: hidden;
  }
  span.show-letter {
    visibility: visible;
  }
</style>