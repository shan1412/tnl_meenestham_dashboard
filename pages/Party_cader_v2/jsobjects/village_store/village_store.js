export default {
	myVar1: [],
	myVar2: {},
	gender_hl: '',
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]

		if (village_cader_griev_chart.selectedDataPoint['rawEventData']['componentType'] == 'series') {
			// Get the clicked gender
			const clickedvillage_cader_griev_chart = village_cader_griev_chart.selectedDataPoint['rawEventData']['name'];  

			if (clickedvillage_cader_griev_chart === appsmith.store.cader_village) {
				// If the clicked data point is already selected, reset the selection
				storeValue('cader_village', null);
			} else {
				// Otherwise, update the selected data point
				storeValue('cader_village', clickedvillage_cader_griev_chart);
			}
		}

	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}