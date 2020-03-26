<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'

const highlightCode = () => {
  const preEl = document.querySelectorAll('pre')
  preEl.forEach(el => {
    hljs.highlightBlock(el)
  })
}
export default {
  components: {},
  data () {
    return {}
  },
  mounted () {
    highlightCode()
  },
  updated () {
    highlightCode()
  },
  computed: {},
  methods: {}
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
