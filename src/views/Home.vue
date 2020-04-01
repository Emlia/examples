<template>
  <div class="home-wrapper">
    <span v-for="blog in blogList" :key="blog.name" @click="goto(blog.name)">{{blog.name}}</span>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      blogList: [{ name: 'rxjs' }, { name: 'git' }]
    }
  },
  methods: {
    goto (name) {
      this.$router.push(name)
    }
  }
}
</script>
<style lang="scss" scoped>
.home-wrapper {
  display: flex;
  & > span {
    background-color: rgba(0, 160, 233, 0.7);
    border-radius: 4px;
    padding: 5px 10px;
    margin: 0 10px;
    color: white;
  }
}
</style>
