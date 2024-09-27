export default {
	myVar1: [],
	myVar2: {},
	gender_hl: '',
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]

		if (top5villages_by_requesters.selectedDataPoint['rawEventData']['componentType'] == 'series') {
			// Get the clicked gender
			const clickedtop5_district_name_chart = top5villages_by_requesters.selectedDataPoint['rawEventData']['name'];  

			if (clickedtop5_district_name_chart === appsmith.store.top5_village_name) {
				// If the clicked data point is already selected, reset the selection
				storeValue('top5_village_name', null);
			} else {
				// Otherwise, update the selected data point
				storeValue('top5_village_name', clickedtop5_district_name_chart);
			}
		}

	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}