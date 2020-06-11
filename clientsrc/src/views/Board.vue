<template>
  <div class="board container fluid">
    <div class="row">
      <div class="col">
        <h1 v-if="board.title">{{board.title}}</h1>
        <h1 v-else>Loading...</h1>
      </div>
    </div>
    <form @submit.prevent="addList">
      <input type="text" placeholder="List Name" v-model="newList.title" required />

      <button type="submit">Create List</button>
    </form>
    <!-- TODO create form for New List -->
    <div class="row">
      <list v-for="list in lists" :key="list.id" :list="list" />
    </div>
  </div>
</template>

<script>
import List from "@/components/ListsComponent.vue";
export default {
  name: "board",
  mounted() {
    this.$store.dispatch("getActiveBoard", this.$route.params.boardId);
    this.$store.dispatch("getListsByBoardId", this.$route.params.boardId);
  },
  data() {
    return {
      newList: {
        title: "",
        boardId: this.$route.params.boardId
      }
    };
  },
  computed: {
    lists() {
      return this.$store.state.lists;
    },
    board() {
      //FIXME This does not work on page reload because the activeBoard is empty in the store
      return this.$store.state.activeBoard;
    }
  },
  methods: {
    addList() {
      this.$store.dispatch("addList", this.newList);

      this.newList = { title: "", boardId: "" };
    }
  },

  components: {
    List
  }
};
</script>
