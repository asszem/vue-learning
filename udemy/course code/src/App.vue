<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>
    <ul>
      <li>
      <add-new-friend @submit-friend="addNewFriend"/>
      </li>
      <li>
        <friend-component
            v-for="friend in friends"
            @toggle-favorite-event-emitted="toggleFavorite"
            :key="friend.id"
            :id="friend.id"
            :name="friend.name"
            :phone-number="friend.phone"
            :email-address="friend.email"
            :is-favorite-from-parent-prop="friend.isFavorite"
        ></friend-component>
      </li>
    </ul>
  </section>
</template>

<script>
// the object inside is the export default from this file
export default {
  data() {
    return {
      friends: [
        {
          id: "Donald",
          name: "Donald",
          phone: "0123 45454",
          email: "andras1@alma.com",
          isFavorite: true,
        },
        {
          id: "andras1",
          name: "Andras Olah",
          phone: "0123 45454",
          email: "andras1@alma.com",
          isFavorite: false,
        },
      ],
    };
  },
  methods: {
    toggleFavorite(friendID) {
      console.log("toggleFavorite called for = ", friendID);
      let identifiedFriend = this.friends.find((x) => x.id === friendID);
      console.log("item to be changed = ", identifiedFriend);
      identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
    },
    addNewFriend(payload) {
      console.log("Inside App.vue - Add New Friend called", payload);
      const newFriend = {
        id: new Date().toISOString(),
        name: payload.name,
        phone: payload.phone,
        email: payload.email,
        isFaforite: false
      }
      console.log(newFriend)
      this.friends.push(newFriend);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>