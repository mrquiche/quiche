<template>
  <div>
    <section class="leftRightSections">
      <node-nav></node-nav>
    </section>
  </div>
</template>

<script>
import NodeNav from "@/components/NodeNav";

export default {
  name: "HomeView",
  components: { NodeNav },
};
</script>

<style scoped></style>
