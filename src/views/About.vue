<template>
  <div>
    <span>about</span>
    <!-- <div v-html="code"></div> -->
    <test-md></test-md>
  </div>
</template>
<script>
import TestMd from './test.md'
export default {
  components: { TestMd },
  data () {
    return {
    }
  },
  computed: {},
  methods: {}
}
</script>
<style scoped>
</style>
