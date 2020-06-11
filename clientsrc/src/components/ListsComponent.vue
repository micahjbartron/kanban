<template>
  <div class="col-4 my-2">
    <div class="card" style="width: 18rem;">
      <div class="card-header">
        {{list.title}}
        <button
          class="btn btn-outline-danger text light ml-5"
          @click="deleteList(list.id)"
        >X</button>
      </div>
      <form @submit.prevent="addTask(list.id)" action="submit">
        <input type="text" placeholder="Task" v-model="newTask.title" required />
        <button type="submit" class="btn btn-outline-success">Add</button>
      </form>
      <div>
        <task v-for="task in tasks" :key="task.id" :task="task" />
      </div>

      <!-- TODO delete button for list -->
    </div>
  </div>
</template>


<script>
import Task from "@/components/TasksComponent.vue";
export default {
  name: "Lists",
  props: ["list"],

  data() {
    return {
      newTask: {
        title: "",
        listId: this.list.id
      }
    };
  },
  methods: {
    deleteList(id) {
      this.$store.dispatch("deleteList", id);
    },
    addTask() {
      this.$store.dispatch("addTask", this.newTask);

      this.newTask = {
        title: "",
        listId: this.list.id
      };
    }
  },
  mounted() {
    this.$store.dispatch("getTasksByListId", this.list.id);
  },
  computed: {
    tasks() {
      return this.$store.state.tasks[this.list.id];
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