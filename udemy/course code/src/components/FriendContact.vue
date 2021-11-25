<template>
  <li>
    <h2>{{ name }} {{ isFavoriteInComponent === "1" ? "(Favorite)" : "" }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
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
  //   props: ["name", "phoneNumber", "emailAddress"],
  // props with validation
  props: {
    name: String,
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavoriteFromParentProp: {
      type: String,
      required: false,
      default: "0", // if no value provided
      validator: function (value) {
        return value === "0" || value === "1"; //return true if valid, false if not
      },
    },
  },
  data() {
    return {
      detailsVisible: true,
      isFavoriteInComponent: this.isFavoriteFromParentProp,
    };
  },
  methods: {
    toggleVisible() {
      this.detailsVisible = !this.detailsVisible;
    },
    toggleFavorite() {
      if (this.isFavoriteInComponent === "1") {
        this.isFavoriteInComponent = "0";
      } else {
        this.isFavoriteInComponent = "1";
      }
    },
  },
};
</script>

<style>
</style>