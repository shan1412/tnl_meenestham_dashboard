export default {
	myVar1: [],
	myVar2: {},
	gender_hl: '',
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]

		if (mandal_cader_griev_chart.selectedDataPoint['rawEventData']['componentType'] == 'series') {
			// Get the clicked gender
			const clickedmandal_cader_griev_chart = mandal_cader_griev_chart.selectedDataPoint['rawEventData']['name'];  

			if (clickedmandal_cader_griev_chart === appsmith.store.cader_mandal) {
				// If the clicked data point is already selected, reset the selection
				storeValue('cader_mandal', null);
			} else {
				// Otherwise, update the selected data point
				storeValue('cader_mandal', clickedmandal_cader_griev_chart);
			}
		}

	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}