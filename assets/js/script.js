const app = new Vue({
	el: "#app",
	data: {
		step: 'intro', // carrers,
	},
	mounted() {
		const self = this;
	},
	methods: {
		gotoStep(step) {
			this.step = step;
		}
	},
})