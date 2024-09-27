export default {
	myVar1: [],
	myVar2: {},
	gender_hl: '',
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
		
	 if (priority_chart.selectedDataPoint['rawEventData']['componentType'] == 'series') {
            const clickedpriority_chart = priority_chart.selectedDataPoint['rawEventData']['name'];  // Get the clicked gender

            if (clickedpriority_chart === appsmith.store.priority_datapoint) {
              // If the clicked data point is already selected, reset the selection
              storeValue('priority_datapoint', null);
            } else {
              // Otherwise, update the selected data point
              storeValue('priority_datapoint', clickedpriority_chart);
            }
	 }
		
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}