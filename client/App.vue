<template>
  <div id="app">
    <h1>{{ message }}</h1>
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-link :to="{ name: 'hello' }">Hello</router-link>
    <router-link :to="{ name: 'todo' }">Todo</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        data () {
            return {
                message: 'Express-Vue Boilerplate'
            }
        }
    }
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

</style>
