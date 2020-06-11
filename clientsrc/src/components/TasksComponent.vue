<template>
  <div class="component">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        {{task.title}}
        <button @click="deleteTask(task.id)" class="btn btn-outline-danger">X</button>
        <comment v-for="comment in comments" :key="comment.id" :comment="comment" />
      </li>
    </ul>
  </div>
</template>


<script>
import Comment from "@/components/CommentsComponent.vue";
export default {
  name: "Tasks",
  props: ["task"],
  data() {
    return {};
  },

  methods: {
    deleteTask(id) {
      this.$store.dispatch("deleteTask", id);
    }
  },
  components: {
    Comment
  }
};
</script>


<style scoped>
</style>