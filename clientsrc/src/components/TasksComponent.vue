<template>
  <div class="component">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        {{task.title}}
        <button @click="deleteTask(task.id)" class="btn btn-outline-danger">X</button>
        <form @submit.prevent="addComment(task.id)">
          <input type="text" placeholder="Comment" v-model="newComment.title" required />
          <button type="submit">Add Comment</button>
        </form>
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
    return {
      newComment: {
        title: "",
        taskId: this.task.id
      }
    };
  },
  mounted() {
    this.$store.dispatch("getCommentsByTaskId", this.task.id);
  },
  computed: {
    comments() {
      return this.$store.state.comments[this.task.id];
    }
  },

  methods: {
    deleteTask(id) {
      this.$store.dispatch("deleteTask", id);
    },
    addComment() {
      this.$store.dispatch("addComment", this.newComment);
      this.newComment = {
        title: "",
        taskId: this.task.id
      };
    }
  },
  components: {
    Comment
  }
};
</script>


<style scoped>
</style>