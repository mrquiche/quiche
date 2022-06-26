<template>
  <body>
    <div id="app" class="flexItem">
      <h1>Mr. Quiche</h1>
      <search-bar></search-bar>
      <router-view id="router-view" :key="$route.fullPath"></router-view>
    </div>
  </body>
</template>

<script>
import SearchBar from "@/components/SearchBar";
export default {
  name: "App",
  components: { SearchBar },
  created() {
    this.$store.dispatch("fetchNodes");
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
  margin-top: 60px;
}
</style>
