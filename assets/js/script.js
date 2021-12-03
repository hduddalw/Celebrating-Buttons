const app = new Vue({
	el: "#app",
	data: {
		step: 'intro', // carrers,
		button: 0
	},
	mounted() {
		const self = this;
	},
	methods: {
		gotoStep(step) {
			this.step = step;
		},
		showBtn(n){
			this.button = n;
		}
	},
})