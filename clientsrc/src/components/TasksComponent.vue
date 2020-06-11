<template>
  <div class="component">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        {{task.title}}
        <button @click="deleteTask" class="btn btn-outline-danger">X</button>
      </li>
    </ul>
  </div>
</template>


<script>
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
  components: {}
};
</script>


<style scoped>
</style>