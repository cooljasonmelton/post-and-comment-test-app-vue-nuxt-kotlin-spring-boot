<!-- 
TODO: takes array of posts and maps them
-->

<script setup lang="ts">
import { mockFeedData } from "../assets/data/mockData";
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold mb-4">POST CONTAINER</h1>
    <hr />

    <div v-for="post in mockFeedData" :key="post.id">
      <h3>{{ post.user.username }}</h3>
      <p>{{ post.content }}</p>
      <span>{{ post.likesCount }} likes</span>
      <hr />
    </div>
  </div>
</template>

<style scoped></style>
