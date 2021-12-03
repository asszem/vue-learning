<template>
  <div>
    <h2>Add new friend</h2>
    <form
        name="addFriendForm"
        @submit="submitNewFriend"
        @submit.prevent="addFriendForm"
    >
      <div>
        <label>
          Name:
        </label>
        <input type="text" v-model="newFriend.name"/>
      </div>
      <div>
        <label>
          Phone number:
        </label>
        <input type="text" v-model="newFriend.phone"/>
      </div>
      <div>
        <label>Email:</label>
        <input type="text" v-model="newFriend.email"/>
      </div>
      <div>
        <button type="submit">Add Friend</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newFriend: {
        name: '',
        phone: '',
        email: '',
      }
    }
  },
  emits: ["submit-friend"],
  methods: {
    submitNewFriend() {
      this.$emit("submit-friend", this.newFriend);
    },
  },
};
</script>

<style>
#app input {
  font: inherit;
  padding: 0.15rem;
}

#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}

#app form div {
  margin: 1rem 0;
}
</style>