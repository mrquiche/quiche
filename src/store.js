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
    },
    selectedPubkey: "",
  },
  mutations: {
    SET_NODES(state, newNodes) {
      state.nodes = newNodes;
    },
    SELECT_PUBKEY(state, pubkey) {
      state.selectedPubkey = pubkey;
    },
    SET_SELECTED_NODE(state, selectedNode) {
      state.selectedNode = selectedNode;
    },
  },
  actions: {
    fetchNodes: (context) => {
      ApiService.fetchNodes()
        .then((json) => context.commit("SET_NODES", json))
        .catch((reason) => console.log("Error: " + reason));
    },
    selectNode(context, pubkey) {
      context.commit("SELECT_PUBKEY", pubkey);
    },
    fetchSelectedNode: (context) => {
      ApiService.fetchSelectedNode(context.state.selectedPubkey)
        .then((json) => context.commit("SET_SELECTED_NODE", json))
        .catch((reason) => console.log("Error: " + reason));
    },
  },
});
