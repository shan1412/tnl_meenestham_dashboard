export default {
	myVar1: [],
	myVar2: {},
	gender_hl: '',
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
		
	 if (top5_mandal_by_requester_chart.selectedDataPoint['rawEventData']['componentType'] == 'series') {
		 				// Get the clicked gender
            const clickedtop5_mandal_by_requester_chart = top5_mandal_by_requester_chart.selectedDataPoint['rawEventData']['name'];  

            if (clickedtop5_mandal_by_requester_chart === appsmith.store.top5_mandal_name) {
              // If the clicked data point is already selected, reset the selection
              storeValue('top5_mandal_name', null);
            } else {
              // Otherwise, update the selected data point
              storeValue('top5_mandal_name', clickedtop5_mandal_by_requester_chart);
            }
	 }
		
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}