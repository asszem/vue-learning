<template>
  <section>
    <h2>My Friends</h2>
    <ul>
      <friend-component></friend-component>
      <friend-component></friend-component>
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
          id: "andras",
          name: "Andras Olah",
          phone: "0123 45454",
          email: "alma@alma.com",
        },
        {
          id: "klara",
          name: "Klara",
          phone: "9999 0123 45454",
          email: "klara@alma.com",
        },
      ],
    };
  },
};
</script>