<template>
  <div id="app">
    <h1>{{ message }}</h1>
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-link :to="{ name: 'hello' }">Tab</router-link>
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
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
