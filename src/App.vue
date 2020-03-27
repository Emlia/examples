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
a {
  text-decoration: none;
  background-color: #00a0e9;
  border-radius: 4px;
  padding: 2px 10px;
  color: #fff;

  transition: all ease 0.3s;
  &:hover {
    background-color: rgba(0, 160, 233, 0.7);
  }
  &:visited {
    color: #fff;
  }
}
li {
  margin: 10px 0;
  & > code {
    color: #c41d7f;
    padding: 0.2em 0.4em;
    font-size: 0.9em;
    background: #f2f4f5;
    border: 1px solid #eee;
    border-radius: 3px;
  }
}
</style>
