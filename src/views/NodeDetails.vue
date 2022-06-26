<template>
  <div id="nodeInfo">
    <h1>Alias: {{ $store.state.selectedNode.alias }}</h1>
    <h1>Pubkey: {{ $store.state.selectedNode.pubkey }}</h1>
  </div>
</template>

<script>
export default {
  name: "NodeDetails",
  created() {
    this.$store.dispatch("fetchSelectedNode");
  },
};
</script>

<style scoped></style>
