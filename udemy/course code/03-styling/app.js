const app = Vue.createApp({
  data() {
	  return ({
    isActiveA: false,
    isActiveB: false,
    isActiveC: false,
	  }
	  )
  },
  computed: {
	classAcomputed() {
		return {active: this.isActiveA};
	}
  }, 
  methods: {
    toggleSelect(boxID) {
		console.log('toggleSelect box = ', boxID)
      switch (boxID) {
        case 'A':
          this.isActiveA = !this.isActiveA;
          break;
        case 'B':
          this.isActiveB = !this.isActiveB;
          break;
        case 'C':
          this.isActiveC = !this.isActiveC;
          break;
      }
    },
  },
});

app.mount('#styling');
