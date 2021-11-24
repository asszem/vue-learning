<template>
  <li>
    <h2>{{ friend.name }}</h2>
	<button @click="toggleVisible">Show details </button>
	<ul v-if="detailsVisible">
		<li><strong>Phone:</strong> {{friend.phone}}</li>
		<li><strong>Email:</strong> {{friend.email}}</li>
	</ul>
  </li>
</template>

<script>
// this is the configuration object for this component
export default {
	data(){
		return {
			detailsVisible:false,
			friend: {
				name: 'Andras',
				phone: '1234 5677 890',
				email: 'andras@ó@hey.com',
			}
		};
	},
	methods: {
		toggleVisible(){
			this.detailsVisible=!this.detailsVisible;
		}
	}
};
</script>

<style>
</style>