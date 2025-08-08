<script>
export default {
  name: "Navbar",
};
</script>

<template>
  <div class="navbar-wrapper">
    <button class="navbar-title-button">
      <NuxtLink class="navbar-title-link" to="/">
        <h1>post and comment</h1>
      </NuxtLink>
    </button>
    <div class="navlink-wrapper">
      <NuxtLink class="navlink" to="/">home</NuxtLink>
      <NuxtLink class="navlink" to="/posts">posts</NuxtLink>
      <NuxtLink class="navlink" to="/profile">profile</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.navbar-wrapper {
  height: 60px;
  border-bottom: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  background-color: #42b983;
  color: white;
}
.navbar-title-button {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: inherit;
  border: 0;
}
.navbar-title-button a {
  text-decoration: none;
  color: white;
}
.navlink-wrapper {
  margin-top: 0.5rem;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
}
.navlink {
  flex: 1;
  font-size: 1.25rem;
  color: white;
}
å .navlink:hover {
  color: #42b983;
  background-color: white;
}
</style>
