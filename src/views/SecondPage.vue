<template>
    <h3>Hello {{ name }}!</h3>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    data() {
        return {
            name: 'SecondPage'
        }
    }
})
</script>

<style scoped>
/* scoped = only for this page */
@import '../css/viewcss/secondpage.css';
</style>