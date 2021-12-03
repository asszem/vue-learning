<template>
  <li>
    <h2>{{ name }} {{ isFavoriteFromParentProp ? "(Favorite)" : "" }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleVisible">
      {{ detailsVisible ? "Hide" : "Show" }} details
    </button>
    <ul v-if="detailsVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
    <button @click="deleteFriend">Delete</button>
  </li>
</template>

<script>
// this is the configuration object for this component
export default {
  //   props: ["name", "phoneNumber", "emailAddress"],
  // props with validation
  props: {
    name: String,
    id: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavoriteFromParentProp: {
      type: Boolean,
      required: false,
      default: false, // if no value provided
      validator: function (value) {
        return value === true || value === false;
      },
    },
  },
  // emits: ['toggle-favorite-emit']
  emits: {
    // this is an event, that  should be handled by a function that expects an id argument
    "toggle-favorite-event-emitted": function (id) {
      // validations can be added here
      console.log(("emitted ID = ", id));
      if (id) {
        console.log(("emitted ID = ", id));
        return true;
      } else {
        console.log("Error! ID is missing");
        return false;
      }
    },
    "delete-friend": function (id) {
      console.log('ID to be deleted = ', id)
      return true;
    },
  },
  data() {
    return {
      detailsVisible: true,
    };
  },
  methods: {
    toggleVisible() {
      this.detailsVisible = !this.detailsVisible;
    },
    toggleFavorite() {
      // This is to send event back to parent
      // this.id is available as it was provided by the parent
      this.$emit("toggle-favorite-event-emitted", this.id);
    },
    deleteFriend() {
      this.$emit("delete-friend", this.id)
    }
  },
};
</script>

<style>
</style>