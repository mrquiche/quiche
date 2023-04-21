<template>
  <div id="app">
    <app-header></app-header>
    <body>
      <div class="flexItem">
        <search-bar></search-bar>
        <router-view id="router-view" :key="$route.fullPath"></router-view>
      </div>
    </body>
    <app-footer></app-footer>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
export default {
  name: "App",
  components: { AppFooter, AppHeader, SearchBar },
  created() {
    // this.$store.dispatch("fetchNodes");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #1d1f31;
}
.flexItem {
  padding: 120px 0 0 0;
}
body {
  margin: 0;
  padding: 0;
  background-color: #1d1f31;
}
</style>
