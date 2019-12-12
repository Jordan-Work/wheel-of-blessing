<template>
  <div>
    {{gridWidth}}
    {{gridHeight}}
    <ul v-for="count in gridItems" :key="count">
      <li>{{message[count]}}</li>
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