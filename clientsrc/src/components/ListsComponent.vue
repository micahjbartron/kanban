<template>
  <div class="component row">
    <div class="col-4">
      <div class="card" style="width: 18rem;">
        <div class="card-header">{{listProp.title}}</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Cras justo odio</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Vestibulum at eros</li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Lists",
  props: ["listProp"]
};
</script>


<style scoped>
</style>