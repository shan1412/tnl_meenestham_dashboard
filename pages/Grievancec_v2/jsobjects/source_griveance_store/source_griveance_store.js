export default {
	myVar1: [],
	myVar2: {},
	gender_hl: '',
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]

		if (source_of_grievance.selectedDataPoint['rawEventData']['componentType'] == 'series') {
			const clickedsource_of_grievance = source_of_grievance.selectedDataPoint['rawEventData']['name'];  // Get the clicked gender

			if (clickedsource_of_grievance === appsmith.store.grievance_source) {
				// If the clicked data point is already selected, reset the selection
				storeValue('grievance_source', null);
			} else {
				// Otherwise, update the selected data point
				storeValue('grievance_source', clickedsource_of_grievance);
			}
		}

	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}