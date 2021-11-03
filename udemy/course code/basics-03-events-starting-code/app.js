const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      addIncrement: 2,
      subtractIncrement: 1,
      name: 'András',
    };
  },
  watch: {
    name(value){
      console.log('watcher function for name property called because name changed to', value);
    }
  },
  computed: { // methods to display data that doesn't need to be recalculated every time
    fullName(){ // consider methods just as like data properties
      return this.name==='András'?'András Default':'András ' + this.name;
    }

  }, 
  methods: { // recalculated every time something changes on the page
    submitForm(event, otherArgument) { // use $event to access if other argumetns are used
      // event.preventDefault(); // to prevent reload page when submit is pressed
      this.name = event.target.elements.nameInput.value;
      alert('Submitted = ' + this.name);
    },
    resetName(){
      this.name='Default Name';
    },
    add(num) {
      this.counter += num;
    },
    subtract(num) {
      this.counter -= num;
    },
    setIncrement(event) {
      //the browser automatically provides event
      this.addIncrement = parseInt(event.target.value);
    },
    setDecrement(event, otherArgument) {
      console.log(otherArgument);
      this.subtractIncrement = parseInt(event.target.value);
    },
  },
});

app.mount('#events');
