<template>
  <button class="btn">
      <slot></slot>
  </button>
</template>

<script>
export default {
    name: 'my-button'
};
</script>

<style scoped>
.btn {
    padding: .3rem .8rem;
    border: 1px solid teal;
    background-color: transparent;
    cursor: pointer;
    transition: .2s;
    border-radius: 3px;
    counter-reset: #333;
    font-size: 14px;
}
.btn:active {
    transform: scale(.9);
}
</style>