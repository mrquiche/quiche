<template>
  <div class="body">
    <div class="searchResultContainer" v-if="!noSearch && !searchButNoResult">
      <div id="node">
        <h1 id="aliasHeading">
          {{ $store.state.selectedNode.alias }}
        </h1>
        <div id="pubkeyText">
          {{
            $store.state.selectedNode.pubkey.substring(0, 6) +
            "..." +
            $store.state.selectedNode.pubkey.substring(
              $store.state.selectedNode.pubkey.length - 6,
              $store.state.selectedNode.pubkey.length
            )
          }}
        </div>
      </div>
      <div class="nodeGrid">
        <div class="basicInfoFieldContainer">
          <div class="basicInfoLabel">Capacity</div>
          <div class="basicInfoValue">
            {{ formatCapacity }}
            <div class="basicInfoUnit">sats</div>
          </div>
        </div>
        <div class="basicInfoFieldContainer">
          <div class="basicInfoLabel">Number of Channels</div>
          <div class="basicInfoValue">
            {{ $store.state.selectedNode.channelCount }}
            <div class="basicInfoUnit">channels</div>
          </div>
        </div>
        <div class="basicInfoFieldContainer">
          <div class="basicInfoLabel">Last Update</div>
          <div class="basicInfoValue">
            {{ $store.state.selectedNode.lastUpdate.substring(0, 10) }}
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="searchButNoResult && !noSearch">
      <h1 id="notFoundHeader" class="searchResultContainer">Node not found</h1>
    </div>
    <div v-else></div>
  </div>
</template>

<script>
export default {
  name: "NodeDetails",
  computed: {
    formatCapacity() {
      return Number(this.$store.state.selectedNode.capacity).toLocaleString();
    },
    noSearch() {
      return (
        this.$store.state.selectedPubkey === "" &&
        this.$store.state.selectedAlias === ""
      );
    },
    searchButNoResult() {
      let pubKeyNotBlank, aliasNotBlank, nodeUndef;
      pubKeyNotBlank = !!this.$store.state.selectedPubkey;
      aliasNotBlank = !!this.$store.state.selectedAlias;
      nodeUndef = this.$store.state.selectedNode === undefined;
      return (pubKeyNotBlank || aliasNotBlank) && nodeUndef;
    },
  },
};
</script>

<style scoped>
.nodeGrid {
  margin-top: 16px;
  padding: 0 0 16px;
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr 1fr 1fr;
}
.basicInfoFieldContainer {
  margin: 0 0 16px;
}
.basicInfoLabel {
  display: flex;
  font-size: 12px;
  align-items: flex-end;
}
.basicInfoValue {
  display: flex;
  font-size: 18px;
  font-weight: bold;
  align-items: flex-end;
}
.basicInfoUnit {
  font-size: 12px;
  margin: 0 0 2px 2px;
}
#aliasHeading {
  font-size: 28px;
  font-weight: bolder;
  margin: 0;
}
#pubkeyText {
  font-size: 14px;
}
#notFoundHeader {
  font-size: 28px;
  font-weight: bolder;
  margin: 0;
}
.searchResultContainer {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 1100px;
  padding: 50px 0 100px 0;
}
.body {
  display: flex;
  color: white;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 320px;
  min-height: 60vh;
}
</style>
