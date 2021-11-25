<template>
  <li>
    <h2>{{ name }}</h2>
    <button @click="toggleVisible">
      {{ detailsVisible ? "Hide" : "Show" }} details
    </button>
    <ul v-if="detailsVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
// this is the configuration object for this component
export default {
  props: ["name", "phoneNumber", "emailAddress"],
  data() {
    return {
      detailsVisible: true,
    };
  },
  methods: {
    toggleVisible() {
      this.detailsVisible = !this.detailsVisible;
    },
  },
};
</script>

<style>
</style>