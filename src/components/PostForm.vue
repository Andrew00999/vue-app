<template>
  <form @submit.prevent>
    <h3>Create post</h3>
    <my-input v-model="post.title" type="text" placeholder="title" />
    <my-input v-model="post.body" type="text" placeholder="description" />
    <my-button
      style="margin: 10px 0 0 auto; display: block"
      @click="createPost"
    >
      add post
    </my-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style scoped>
</style>