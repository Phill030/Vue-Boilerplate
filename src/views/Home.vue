<template>
  <img src="../../public/assets/logo.png">
  <h3>Hello Home!</h3>
  <TestButton @click="switchPageMethod1">Switch to page 1</TestButton>
  <!-- Those are two methods to switch between views -->
  <router-link custom v-slot="{ navigate }" to="/secondpage">
    <TestButton @click="navigate">Switch to page 2</TestButton>
  </router-link>
</template>

<script lang="ts">
import TestButton from "../components/TestButton.vue";
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {};
  },
  methods: {
    switchPageMethod1() {
      this.$router.push("/firstpage");
      // OR
      // this.$router.push({ path: `/firstpage`})

    },
  },
  components: { TestButton },
//   components are important if you don't want to use <script setup lang="ts"> to import the component !!
});
</script>

<style scoped>
/* scoped = only for this page */
@import "../css/viewcss/home.css";
</style>
