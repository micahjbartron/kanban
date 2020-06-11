<template>
  <div class="col-4 my-2">
    <div class="card" style="width: 18rem;">
      <div class="card-header">{{list.title}}</div>
      <!-- TODO v-for task in tasks -->
      <task v-for="task in tasks" :key="task.id" :task="task" />
      <button class="btn btn-outline-danger text light" @click="deleteList(list.id)">X</button>
      <!-- TODO delete button for list -->
    </div>
  </div>
</template>


<script>
import Task from "@/components/TasksComponent.vue";
export default {
  name: "Lists",
  props: ["list"],
  methods: {
    deleteList(id) {
      this.$store.dispatch("deleteList", id);
      debugger;
    }
  },
  components: {
    Task
  }
};
</script>


<style scoped>
/* <ul class="list-group list-group-flush">
        <li class="list-group-item">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul> */
</style>