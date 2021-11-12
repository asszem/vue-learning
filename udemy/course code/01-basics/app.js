const app = Vue.createApp({
  // define data in a function that returns an object
  data() {
    // it should ALWAYS return an object. Not array, not string, Object!
    return {
      courseGoalA: 'Learn Vue A',
      courseGoalB: '<h2>Learn Vue B<h2>',
	  htmlInterpretedText: "<h3><b>HTML interpreted  text</b></3>",
      anything: true,
      object: { name: 'tibor' },
      array: [1, 2, 'three'],
      vueLink: 'https://vuejs.org/',
    };
  },
  // define actions in an object
  methods: {
    //every prop should be a function
    anyFunction: function () {},
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA; // VUE merges data from data object to a global object
      } else {
        return this.courseGoalB;
      }
    },
  },
});
app.mount('#user-goal'); // use ID as unique selector of which Vue should control
