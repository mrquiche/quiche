<template>
  <div class="body">
    <div class="searchResultContainer" v-if="!noSearch && !searchButNoResult">
      <div id="node">
        <h1 class="nodeHeading" v-if="$store.state.selectedNode.alias">
          {{ $store.state.selectedNode.alias }}
        </h1>
        <h1 class="nodeHeading" v-else>
          {{ formatPubkey }}
        </h1>
        <div id="pubkeyText">
          {{ formatPubkey }}
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
            {{ formatChannelCount }}
            <div class="basicInfoUnit">channels</div>
          </div>
        </div>
        <div class="basicInfoFieldContainer">
          <div class="basicInfoLabel">Last Update</div>
          <div class="basicInfoValue">
            {{ $store.state.selectedNode.lastUpdate.substring(0, 10) }}
          </div>
        </div>
        <div
          class="basicInfoFieldContainer"
          v-if="$store.state.selectedNode.degrCenRank"
        >
          <div class="basicInfoLabel">Degree Centrality</div>
          <div class="basicInfoValue">
            {{
              getNumberFormattedCommas($store.state.selectedNode.degrCenRank)
            }}
            <div class="basicInfoOrdinal">
              {{ getOrdinalIndicator($store.state.selectedNode.degrCenRank) }}
            </div>
          </div>
        </div>
        <div
          class="basicInfoFieldContainer"
          v-if="$store.state.selectedNode.betwCenRank"
        >
          <div class="basicInfoLabel">Betweenness Centrality</div>
          <div class="basicInfoValue">
            {{
              getNumberFormattedCommas($store.state.selectedNode.betwCenRank)
            }}
            <div class="basicInfoOrdinal">
              {{ getOrdinalIndicator($store.state.selectedNode.betwCenRank) }}
            </div>
          </div>
        </div>
        <div
          class="basicInfoFieldContainer"
          v-if="$store.state.selectedNode.closCenRank"
        >
          <div class="basicInfoLabel">Closeness Centrality</div>
          <div class="basicInfoValue">
            {{
              getNumberFormattedCommas($store.state.selectedNode.closCenRank)
            }}
            <div class="basicInfoOrdinal">
              {{ getOrdinalIndicator($store.state.selectedNode.closCenRank) }}
            </div>
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
    formatPubkey() {
      let pubkey, pubkeyLen;
      pubkey = this.$store.state.selectedNode.pubkey;
      pubkeyLen = pubkey.length;
      return (
        pubkey.substring(0, 6) +
        "..." +
        pubkey.substring(pubkeyLen - 6, pubkeyLen)
      );
    },
    formatChannelCount() {
      return this.getNumberFormattedCommas(
        this.$store.state.selectedNode.channelCount
      );
    },
    formatCapacity() {
      return this.getNumberFormattedCommas(
        this.$store.state.selectedNode.capacity
      );
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
  methods: {
    getNumberFormattedCommas(number) {
      return Number(number).toLocaleString();
    },
    getOrdinalIndicator(number) {
      const lastDigit = number % 10;
      const secondLastDigit = Math.floor(number / 10) % 10;
      return secondLastDigit === 1 || lastDigit === 0 || lastDigit > 3
        ? "th"
        : lastDigit === 1
        ? "st"
        : lastDigit === 2
        ? "nd"
        : "rd";
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
.basicInfoOrdinal {
  font-size: 12px;
  margin: 0 0 2px 2px;
}
.nodeHeading {
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
