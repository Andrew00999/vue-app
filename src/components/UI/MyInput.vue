<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text" />
</template>

<script>
export default {
  name: "my-input",
  props: {
      modelValue: [String, Number]
  },
  methods: {
      updateInput(event) {
          this.$emit('update:modelValue', event.target.value)
      }
  }
};
</script>

<style scoped>
.input {
  width: 100%;
  height: auto;
  border: 1px solid teal;
  padding: 0.5rem 0.8rem;
  margin-top: 10px;
  outline: 0;
}
.input::placeholder {
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: capitalize;
}
</style>