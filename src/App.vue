<template>
  <div id="app">
  	<div class="header">
  		header
  	</div>
  	<div class="tab">
  		tab
  	</div>
  	<div class="content">
  		content
  	</div>
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>
  </div>
</template>

<script>
import header from './components/header/header.vue'
export default {
  componets: {
    header
  },
  name: 'app'
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
</style>
