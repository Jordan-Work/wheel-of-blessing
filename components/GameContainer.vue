<template>
  <div>
    <input class="letter-input" v-model="typedLetter" placeholder="Enter a Letter">
    <p>{{foundLetterPhrase}}</p>
    <Game-Grid :gridWidth="gridWidth"
      :gridHeight="gridHeight"
      :message="messageToArray" 
      :foundLetters="foundLetter"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import  GameGrid from './GameGrid.Vue';

export default {
  created() {
    this.$store.commit('updateStatement');
  },
  components: {
    GameGrid
  },
  data() {
    return {
        typedLetter: '',
        nonFound: ''
      }
  },
  computed: {
    ...mapState(['defaultStatement']),
    messageToArray() {
      let msg = this.defaultStatement.split('');
      return msg;
    },
    foundLetter() {
      /**
       * used to compute what letters are found commit only new ones to the store
       * also updates the logic used for foundLetterPhrase()
       */
      
      let statement = this.$store.state.defaultStatement.replace(/\s/g, '').split('')
      let found = statement.filter((letter) => this.typedLetter.toLowerCase() === letter.toLowerCase());
      
      // TODO: regex Logic could also be added here to prevent passing non words ie /\w/g
      let alreadyFound = this.$store.state.lettersFound.filter((letter) => this.typedLetter.toLowerCase() === letter.toLowerCase());

      if (found.length && !alreadyFound.length) {
        this.$store.commit('addLettersFound', found[0]);
      } else {
        this.nonFound = this.typedLetter;
      }
      this.typedLetter = '';
      return found;
    },
    foundLetterPhrase() {
      /**
       * returns a phrase only when new letters are typed
       * also handles if a space is typed in
       */
      if (this.typedLetter === '' || this.typedLetter === ' ') {
        return '';
      }
      return this.foundLetter.length ? `There are ${this.foundLetter.length} ${this.foundLetter[0]}'s` : `There are no ${this.nonFound}'s`;
    },
    gridWidth() {
      return this.$store.state.minimumGridSize;
    },
    gridHeight() {
      // calc the grid rows for the size of the statement 
      let columns = this.$store.state.defaultStatement.length / this.gridWidth + 1;
      return Math.ceil(columns);
    }
  }
}
</script>

<style>
  .letter-input {
    margin-bottom: 2em;
  }
</style>