<template>
  <div>
    <div class="dialog" v-if="show" @click="hideModal">
      <div @click.stop class="dialog__content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-modal",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
      hideModal() {
          this.$emit('update:show', false)
      }
  }
};
</script>

<style scoped>
.dialog {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .4);
    display: flex;
    width: 100%;
}
.dialog__content {
    width: 50%;
    margin: auto;
    background-color: #fff;
    border-radius: .5rem;
    padding: 2rem;
}
</style>