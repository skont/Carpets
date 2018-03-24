<template>
   
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">VueNoLint Test</span>
        <div class="mdl-layout-spacer"></div>
        <nav class="mdl-navigation mdl-layout--large-screen-only">
        <router-link class="mdl-navigation__link" to="/test">Test</router-link>
        <router-link class="mdl-navigation__link" to="/Customers">Customers</router-link>
        <router-link class="mdl-navigation__link" to="/AddCustomer">New</router-link>
      </nav>
      </div>
    </header>
    <!-- <div class="mdl-layout__drawer mdl-layout--small-screen-only"> -->
      <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">VueNoLint Test</span>
      <nav class="mdl-navigation">
        <router-link class="mdl-navigation__link" @click.native="hideMenu" to="/test">Test</router-link>
        <router-link class="mdl-navigation__link" @click.native="hideMenu" to="/Customers">Customers</router-link>
        <router-link class="mdl-navigation__link" @click.native="hideMenu" to="/AddCustomer">New</router-link>
      </nav>
    </div>
    <main class="mdl-layout__content">
      <div class="app">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
require('material-design-lite')
export default {
  name: 'app',
  methods: {
    hideMenu: function () {
      document.getElementsByClassName('mdl-layout__drawer')[0].classList.remove('is-visible')
      document.getElementsByClassName('mdl-layout__obfuscator')[0].classList.remove('is-visible')
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import url('https://code.getmdl.io/1.2.1/material.blue-red.min.css');
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
