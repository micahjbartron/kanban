<template>
  <div class="board container fluid">
    <div class="row">
      <div class="col">
        <div></div>
        <h1 v-if="board.title">{{board.title}}</h1>
        <h1 v-else>Loading...</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-4">
        <div class="card" style="width: 18rem;">
          <div class="card-header">{{lists.title}}</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "board",
  mounted() {
    this.$store.dispatch("getActiveBoard", this.$route.params.boardId);
    this.$store.dispatch("getProfile");
    this.$store.dispatch("getListsByBoardId", this.$route.params.boardId);
  },
  computed: {
    lists() {
      // debugger;
      return this.$store.state.lists;
    },
    board() {
      //FIXME This does not work on page reload because the activeBoard is empty in the store
      return this.$store.state.activeBoard;
    }
  },
  props: ["boardId"]
};
</script>
