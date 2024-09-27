export default {
	myVar1: [],
	myVar2: {},
	gender_hl: '',
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
		
	 if (grievance_by_granularity.selectedDataPoint['rawEventData']['componentType'] == 'series') {
            const clickedGranularity = grievance_by_granularity.selectedDataPoint['rawEventData']['name'];  // Get the clicked gender

            if (clickedGranularity === appsmith.store.granularity_datapoint) {
              // If the clicked data point is already selected, reset the selection
              storeValue('granularity_datapoint', null);
            } else {
              // Otherwise, update the selected data point
              storeValue('granularity_datapoint', clickedGranularity);
            }
	 }
		
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}