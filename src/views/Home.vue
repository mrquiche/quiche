<template>
  <div>
    <div>
      <node-details></node-details>
    </div>
    <div>
      <section class="leftRightSections">
        <node-nav></node-nav>
      </section>
    </div>
  </div>
</template>

<script>
import NodeNav from "@/components/NodeNav";
import NodeDetails from "@/components/NodeDetails";

export default {
  name: "HomeView",
  components: { NodeDetails, NodeNav },
};
</script>

<style scoped></style>
