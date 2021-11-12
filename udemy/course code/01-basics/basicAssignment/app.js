const app = Vue.createApp({
  data() {
    return {
		name:'András',
		age: 42,
		favNum: this.randomNumber(),
		imageUrl: 'https://assets.4cdn.hu/kraken/7L8o3rGBkgPH1ECoUs.jpeg'
	};
  },
  methods: {
    randomNumber() {
		console.log('Random number called')
		return Math.random();
	},
  },
});

app.mount('#assignment');
