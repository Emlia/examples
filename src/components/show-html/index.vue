<template>
  <iframe :src="src" :style="iframeStyle" class="show-html-wrapper"></iframe>
</template>
<script>
export default {
  components: {},
  props: {
    url: {
      type: String,
      required: true
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '200px;'
    }
  },
  data () {
    return {}
  },
  computed: {
    src () {
      return `${this.url}`
    },
    iframeStyle () {
      const { width, height } = this
      return {
        width,
        height
      }
    }
  },
  methods: {}
}
</script>
<style scoped>
.show-html-wrapper {
  outline: 0;
  border: 0;
}
</style>
