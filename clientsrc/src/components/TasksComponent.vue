<template>
  <div class="component">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">{{task.title}}</li>
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
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>