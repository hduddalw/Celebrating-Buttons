const app = new Vue({
	el: "#app",
	data: {
		step: 'intro', // carrers,
		button: 0,
		styles: [1,2,3,4],
		colors: ['#fc7fc2', '#ff6943', '#ffb700', '#fee900', '#2d9ed1', '#01c367'],
		gerenatedbtn:{
			name: '',
			style: '',
			color: '#ff6943',
			hovercolor: '#ff6943',
			thickness: 2,
			buttonText: '',
			intro: '',

		}
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
	}
})