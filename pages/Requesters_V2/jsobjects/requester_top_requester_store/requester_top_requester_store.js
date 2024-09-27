export default {
	myVar1: [],
	myVar2: {},
	gender_hl: '',
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
		
	 if (top5requesters.selectedDataPoint['rawEventData']['componentType'] == 'series') {
		 				// Get the clicked gender
            const clickedtop5requester_chart = top5requesters.selectedDataPoint['rawEventData']['name'];  

            if (clickedtop5requester_chart === appsmith.store.top5requester_name) {
              // If the clicked data point is already selected, reset the selection
              storeValue('top5requester_name', null);
            } else {
              // Otherwise, update the selected data point
              storeValue('top5requester_name', clickedtop5requester_chart);
            }
	 }
		
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}