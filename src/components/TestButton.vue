<template>
  <button>
    <!-- Slot = <componentName>THIS_TEXT_HERE</componentName> -->
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {};
  },
});
</script>

<style scoped>
/* scoped = only for this page */
@import "../css/componentcss/testbutton.css";
</style>
