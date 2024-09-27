export default {
	myVar1: [],
	myVar2: {},
	gender_hl: '',
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
		
	 if (grievances_parliment_chart.selectedDataPoint['rawEventData']['componentType'] == 'series') {
		 				// Get the clicked gender
            const clickedgrievances_parliment_chart = grievances_parliment_chart.selectedDataPoint['rawEventData']['name'];  

            if (clickedgrievances_parliment_chart === appsmith.store.grievence_by_parliment_constituency) {
              // If the clicked data point is already selected, reset the selection
              storeValue('grievence_by_parliment_constituency', null);
            } else {
              // Otherwise, update the selected data point
              storeValue('grievence_by_parliment_constituency', clickedgrievances_parliment_chart);
            }
	 }
		
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}