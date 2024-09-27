export default {
	myVar1: [],
	myVar2: {},
	gender_hl: '',
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]

		if (location_specific_or_not_chart.selectedDataPoint['rawEventData']['componentType'] == 'series') {
			const clickedclickedpriority_chart = location_specific_or_not_chart.selectedDataPoint['rawEventData']['name'];  // Get the clicked gender

			if (clickedclickedpriority_chart === appsmith.store.grievance_locationSpecific) {
				// If the clicked data point is already selected, reset the selection
				storeValue('grievance_locationSpecific', null);
			} else {
				// Otherwise, update the selected data point
				storeValue('grievance_locationSpecific', clickedclickedpriority_chart);
			}
		}

	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}