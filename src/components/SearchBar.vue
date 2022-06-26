<template>
  <form method="get" action="">
    <router-link
      :to="{
        name: 'pubkey',
        params: {
          name: pubkey,
        },
      }"
    >
      <input
        id="searchBar"
        type="search"
        name="searchTerm"
        v-model="pubkey"
        placeholder="Enter pubkey or alias..."
      />
      <input type="submit" value="Search" />
      <p>Pubkey is: {{ pubkey }}</p>
    </router-link>
  </form>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      pubkey: "",
    };
  },
};
</script>

<style scoped>
#searchBar {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 600px;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
