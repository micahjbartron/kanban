<template>
  <div class="component">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        {{comment.title}}
        <button @click="deleteComment(comment.id)" class="btn btn-outline-danger">x</button>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "Comments",
  props: ["comment"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    deleteComment(id) {
      this.$store.dispatch("deleteComment", id);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>