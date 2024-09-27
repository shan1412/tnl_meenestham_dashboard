export default {
	myVar1: [],
	myVar2: {},
	gender_hl: '',
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]

		if (cader_chart.selectedDataPoint['rawEventData']['componentType'] == 'series') {
			// Get the clicked gender
			const clickedcader_chart = cader_chart.selectedDataPoint['rawEventData']['name'];  

			if (clickedcader_chart === appsmith.store.cader_name) {
				// If the clicked data point is already selected, reset the selection
				storeValue('cader_name', null);
			} else {
				// Otherwise, update the selected data point
				storeValue('cader_name', clickedcader_chart);
			}
		}

	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}