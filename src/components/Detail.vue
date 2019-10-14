<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      <router-link :to="{ name: 'home' }">home</router-link>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Detail',
  data() {
    return {
      msg: ''
    }
  },
  computed: {
    ...mapGetters(['data'])
  },
  mounted() {
    const post = this.data.find(post => post.id === parseInt(this.$route.params.id))
    this.msg = post.title
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
