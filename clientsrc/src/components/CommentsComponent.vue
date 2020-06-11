<template>
  <div class="component">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        {{comment.body}}
        <button @click="deleteComment" class="btn btn-outline-danger">X</button>
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
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>