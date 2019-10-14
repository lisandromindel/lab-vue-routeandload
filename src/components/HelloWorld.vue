<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="items">
      <div class="item">
        <router-link :to="{ name: 'detail', params: {id:'300'} }">detail – broken</router-link>
      </div>
      <div v-for="post in data" :key="post.id" class="item">
        <router-link :to="{ name: 'detail', params: {id: post.id} }">
          detail: {{post.id}}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'home'
    }
  },
  computed: {
    ...mapGetters(['data'])
  },
  mounted() {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  text-align: left;
}
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
.items {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 4px;
  grid-row-gap: 4px;
  justify-items: stretch;
  align-items: start;
}
.item {
  display: flex;
  align-items: center;
}
</style>
