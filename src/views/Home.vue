<template>
  <div>
    <span v-for="blog in blogList" :key="blog.name" @click="goto(blog.name)">{{blog.name}}</span>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      blogList: [{ name: 'rxjs' }]
    }
  },
  methods: {
    goto (name) {
      this.$router.push(name)
    }
  }
}
</script>
