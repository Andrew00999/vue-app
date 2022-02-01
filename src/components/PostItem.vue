<template>
  <div>
    <div class="post">
      <div>
        <div>
          <strong>{{ post.id }} Title:</strong> {{ post.title }}
        </div>
        <div><strong>Description:</strong> {{ post.body }}</div>
      </div>
      <div class="post__btns">
        <my-button 
            style="margin-right: 10px"
            @click="$router.push(`/posts/${post.id}`)"
        >
            open
        </my-button>
        <my-button @click="$emit('remove', post)">delete</my-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  border: 2px solid teal;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.post__btns {
  display: flex;
}
</style>