<template>
  <div id="app">
  	<div class="header">
  		<v-header></v-header>
  	</div>
  	<div class="tab border-1px">
  		<div class="tab-item">
  			<router-link to="/goods">商品</router-link>
  		</div>
  		<div class="tab-item">
  			<router-link to="/ratings">评论</router-link>
  		</div>
  		<div class="tab-item">
  			<router-link to="/seller">商家</router-link>
  		</div>
  	</div>
  	 <router-view></router-view>
    <!--<img src="./assets/logo.png">-->
  </div>
</template>

<script>
import header from './components/header/header.vue'
import './common/stylus/index.styl'
export default {
  components: {
    'v-header': header
  },
  name: 'app'
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "./common/stylus/mixin.styl"
#app
 .tab
   display: flex
   width: 100%
   height: 40px
   line-height: 40px
   border-1px(rgba(7,17,27,0.1))
   .tab-item
     flex: 1
     text-align: center
     & > a
       display: block
       font-size: 14px
       color: rgb(77,85,93)
       &.active
         color: rgb(240,20,20)


</style>
