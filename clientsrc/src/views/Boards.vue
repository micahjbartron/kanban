<template>
  <div class="boards">
    WELCOME TO THE BOARDS!!!
    <form @submit.prevent="addBoard">
      <input type="text" placeholder="title" v-model="newBoard.title" required />
      <input type="text" placeholder="description" v-model="newBoard.description" />
      <button type="submit">Create Board</button>
    </form>
    <div v-for="board in boards" :key="board.id">
      <button @click="deleteBoard" class="btn btn-outline-danger">delete</button>
      <!-- TODO Add a button to delete @click and pass the board.id -->
      <router-link :to="{name: 'board', params: {boardId: board.id}}">Title- {{board.title}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "boards",
  mounted() {
    this.$store.dispatch("getBoards");
  },
  data() {
    return {
      newBoard: {
        title: "",
        description: ""
      }
    };
  },
  computed: {
    boards() {
      return this.$store.state.boards;
    }
  },
  methods: {
    addBoard() {
      this.$store.dispatch("addBoard", this.newBoard);
      this.newBoard = { title: "", description: "" };
    },
    deleteBoard() {
      this.$store.dispatch("deleteBoard", this.boardId);
      debugger;
    }
    // TODO add method to delete that takes in boardId
  }
};
</script>