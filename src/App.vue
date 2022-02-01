<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {};
</script>

<style>
#app {
  width: 90%;
  margin: 0 auto;
  padding: 5rem 0 2rem 0;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 1px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app__btns {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
}
</style>