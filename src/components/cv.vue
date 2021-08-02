<template>
  <div class="container">
    <sectionLeft />
    <sectionRight />
  </div>
</template>

<script>
import sectionRight from "./section-right.vue";
import sectionLeft from "./section-left.vue";

export default {
  components: {
    sectionRight,
    sectionLeft,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
