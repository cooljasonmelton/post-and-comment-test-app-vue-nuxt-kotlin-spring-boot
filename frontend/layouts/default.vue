<template>
  <div class="layout">
    <header>
      <Navbar />
    </header>

    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script setup>
import Navbar from "~/components/Navbar.vue";
</script>

<style scoped>
.layout {
  background-color: black;
  min-height: 100vh;
}
main {
  flex: 1;
}
</style>
