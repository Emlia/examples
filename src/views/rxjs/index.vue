<template>
  <div>
    <!-- <span>this rxjs page</span>
    <div v-for="link in links" :key="link.name">
      <span>{{link.name}}</span>
      <show-html :url="link.path"></show-html>
    </div> -->
    <rxjs></rxjs>
  </div>
</template>

<script>
import ShowHtml from '@/components/show-html'
import Rxjs from '@note/rxjs/README.md'
export default {
  components: { Rxjs },
  data () {
    return {
      links: [{ name: 'rxjs', path: '/code/rxjs' }]
    }
  },
  computed: {},
  methods: {}
}
</script>
<style scoped>
</style>
