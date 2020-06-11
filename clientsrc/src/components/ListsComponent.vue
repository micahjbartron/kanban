<template>
  <div class="col-4 my-2">
    <div class="card" style="width: 18rem;">
      <div class="card-header">{{list.title}}</div>
      <!-- TODO v-for task in tasks -->
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
      <!-- TODO delete button for list -->
    </div>
  </div>
</template>


<script>
export default {
  name: "Lists",
  props: ["list"],
  methods: {
    // TODO add delete list
  }
};
</script>


<style scoped>
</style>