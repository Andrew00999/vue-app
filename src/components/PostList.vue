<template>
  <div>
    <div v-show="posts.length > 0">
      <h3 style="margin: 1rem 0">User List</h3>
      <post-item
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"
      />
    </div>
    <h1 class="empty__title" v-show="posts.length === 0">Posts List empty</h1>
  </div>
</template>

<script>
import PostItem from "./PostItem.vue";
export default {
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.empty__title {
  color: rgb(252, 166, 166);
  text-align: center;
}
</style>