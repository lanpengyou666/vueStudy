<template>
    <!-- <el-header></el-header> -->
  <div id="app">
    <el-container>
    <el-header>
      <HeaderView />
    </el-header>
    <el-container>
      <el-aside width=" ">
        <AsideView />
      </el-aside>
      <el-main>
        <HelloWorld msg="Welcome to Your Vue.js App"/>
      </el-main>
    </el-container>
    <el-footer>
      <FooterView />
    </el-footer>
    </el-container>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HeaderView from './HeaderView.vue'
import FooterView from './FooterView.vue'
import AsideView from './AsideView.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    HeaderView,
    FooterView,
    AsideView
  }
}
</script>

<style>
.el-header {
  padding: 0px;
}
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  border: 0;
  background-color: blue;
} */
</style>
