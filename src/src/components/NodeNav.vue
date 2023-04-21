<template>
  <nav class="nodeButtons">
    <template v-for="node in $store.state.nodes">
      <button
        id="selected"
        class="nodeButton"
        :key="node.pubkey"
        @click="selectNode(node.pubkey)"
      >
        {{ node.alias }}
      </button>
    </template>
  </nav>
</template>

<script>
export default {
  name: "NodeNav",
  methods: {
    selectNode(pubkey) {
      this.$store.dispatch("selectNode", pubkey);
      this.fetchNode();
    },
    fetchNode() {
      this.$store.dispatch("fetchSelectedNode");
    },
  },
};
</script>

<style scoped>
.nodeButtons {
  flex-wrap: wrap;
  align-items: center;
}

.nodeButton {
  margin: 10px 0;
  padding-left: 20px;
  color: white;
  background-color: #828ec0;
  border: none;
  height: 40px;
  width: 300px;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-content: center;
  align-items: center;
}

.nodeButton:hover {
  background-color: #455287;
}
</style>
