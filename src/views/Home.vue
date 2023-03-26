<template>
  <div>
    <div class="nodeDetailsSection">
      <node-details></node-details>
    </div>
  </div>
</template>

<script>
import NodeDetails from "@/components/NodeDetails";

export default {
  name: "HomeView",
  components: { NodeDetails },
};
</script>

<style scoped>
.nodeDetailsSection {
  display: flex;
  align-content: center;
}
</style>
