<template>
  <div class="searchContainer">
    <div class="searchBarWrapper">
      <input
        id="searchBar"
        type="text"
        v-model="search"
        placeholder="Enter pubkey or alias..."
        @change="selectNode(search)"
      />
    </div>
    <button class="btn" @click="selectNode(search)">Search</button>
  </div>
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
    selectNode(searchTerm) {
      if (searchTerm.length >= 66) {
        this.$store.dispatch("clearAlias");
        this.$store.dispatch("selectNodeByPubkey", searchTerm);
        this.fetchNodeByPubkey();
      } else {
        this.$store.dispatch("clearPubkey");
        this.$store.dispatch("selectNodeByAlias", searchTerm);
        this.fetchNodeByAlias();
      }
    },
    fetchNodeByPubkey() {
      this.$store.dispatch("fetchSelectedNodeByPubkey");
    },
    fetchNodeByAlias() {
      this.$store.dispatch("fetchSelectedNodeByAlias");
    },
  },
};
</script>

<style scoped>
.btn {
  display: inline-block;
  font-weight: 400;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.searchContainer {
  max-width: 900px;
  gap: 10px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
#searchBar:focus {
  width: 100%;
  color: #495057;
}
.searchBarWrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid;
  background-color: white;
  width: 400px;
  padding: 8px;
  border-radius: 8px;
  transition: border-color 0.6s ease 0s, background-color 0.2s ease 0s;
}
#searchBar {
  width: 100%;
  background-color: white;
  padding: 2px;
  border: none;
  outline: none;
  font-size: 14px;
}
</style>
