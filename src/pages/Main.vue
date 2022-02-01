<template>
  <div>
      <h1>Welcome to Main page</h1>
      <router-link to="/posts">К постам</router-link>
      <router-link to="/about">О сайте</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
    text-align: center;
}
</style>