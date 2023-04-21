import Vue from "vue";
import Vuex from "vuex";
import ApiService from "@/services/ApiService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nodes: [],
    selectedNode: {
      pubkey: "",
      alias: "",
      capacity: "",
      channelCount: "",
      lastUpdate: "",
    },
    selectedPubkey: "",
    selectedAlias: "",
  },
  mutations: {
    SET_NODES(state, newNodes) {
      state.nodes = newNodes;
    },
    SELECT_PUBKEY(state, pubkey) {
      state.selectedPubkey = pubkey;
    },
    SELECT_ALIAS(state, alias) {
      state.selectedAlias = alias;
    },
    SET_SELECTED_NODE(state, selectedNode) {
      state.selectedNode = selectedNode;
    },
    CLEAR_PUBKEY(state) {
      state.selectedPubkey = "";
    },
    CLEAR_ALIAS(state) {
      state.selectedAlias = "";
    },
  },
  actions: {
    fetchNodes: (context) => {
      ApiService.fetchNodes()
        .then((json) => context.commit("SET_NODES", json))
        .catch((reason) => console.log("Error: " + reason));
    },
    selectNodeByPubkey(context, pubkey) {
      context.commit("SELECT_PUBKEY", pubkey);
    },
    selectNodeByAlias(context, alias) {
      context.commit("SELECT_ALIAS", alias);
    },
    clearPubkey(context) {
      context.commit("CLEAR_PUBKEY");
    },
    clearAlias(context) {
      context.commit("CLEAR_ALIAS");
    },
    fetchSelectedNodeByPubkey: (context) => {
      ApiService.fetchSelectedNodeByPubkey(context.state.selectedPubkey)
        .then((json) => context.commit("SET_SELECTED_NODE", json))
        .catch((reason) => console.log("Error: " + reason));
    },
    fetchSelectedNodeByAlias: (context) => {
      ApiService.fetchSelectedNodeByAlias(context.state.selectedAlias)
        .then((json) => context.commit("SET_SELECTED_NODE", json))
        .catch((reason) => console.log("Error: " + reason));
    },
  },
});
