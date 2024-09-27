export default {
	myVar1: [],
	myVar2: {},
	gender_hl: '',
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
		
	 if (gender_chart.selectedDataPoint['rawEventData']['componentType'] == 'series') {
            const clickedGender = gender_chart.selectedDataPoint['rawEventData']['name'];  // Get the clicked gender

            if (clickedGender === appsmith.store.gender_datapoint) {
              // If the clicked data point is already selected, reset the selection
              storeValue('gender_datapoint', null);
            } else {
              // Otherwise, update the selected data point
              storeValue('gender_datapoint', clickedGender);
            }
	 }
		
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}