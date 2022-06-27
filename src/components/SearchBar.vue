<template>
  <form method="get" action="">
    <div class="search-wrapper">
      <input
        id="searchBar"
        type="text"
        v-model="search"
        placeholder="Enter pubkey or alias..."
        @focusout="selectNode(search)"
      />
    </div>
  </form>
</template>

<script>
export default {
  name: "SearchBar",
  data: function () {
    return {
      search: "",
    };
  },
  methods: {
    selectNode(pubkey) {
      if (pubkey.length >= 66) {
        this.$store.dispatch("selectNode", pubkey);
        this.fetchNode();
      }
    },
    fetchNode() {
      this.$store.dispatch("fetchSelectedNode");
    },
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
