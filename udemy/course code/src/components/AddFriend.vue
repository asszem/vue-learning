<template>
  <div id="addFriend">
    <h2>Add new friend</h2>
    <form
      name="addFriendForm"
      @submit="submitNewFriend"
      @submit.prevent="addFriendForm"
    >
      <p>
        Name:
        <input type="text" name="friendName" />
      </p>
      <p>
        Phone number:
        <input type="text" name="phone" />
      </p>
      <p>
        Email:
        <input type="text" name="email" />
      </p>
      <button type="submit">Add Friend</button>
    </form>
  </div>
</template>

<script>
export default {
  // emits: ["submit-friend"],
  methods: {
    submitNewFriend(event) {
      console.log("InsideAddFriend.vue submint new friend presed");
      // console.log('name = ', event.target.elements.friendName.value)
      this.$emit("submit-friend", event.target.elements);
    },
  },
};
</script>

<style>
div#addFriend {
  background-color: rebeccapurple;
  align-content: center;
  text-align: center;
}
</style>