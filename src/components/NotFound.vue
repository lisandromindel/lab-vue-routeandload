<template>
  <div class="hello">
    <h1>OoPs – 404ish</h1>
    <p>
      <router-link :to="{ name: 'home' }">home</router-link>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NotFound'
}
</script>

<style scoped>
</style>
