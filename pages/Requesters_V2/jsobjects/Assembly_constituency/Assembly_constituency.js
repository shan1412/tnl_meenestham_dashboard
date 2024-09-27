export default {
	myVar1: [],
	myVar2: {},
	gender_hl: '',
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
		
	 if (top5assembly_by_requesters.selectedDataPoint['rawEventData']['componentType'] == 'series') {
		 				// Get the clicked gender
            const clickedtop5assembly_by_requesters_chart = top5assembly_by_requesters.selectedDataPoint['rawEventData']['name'];  

            if (clickedtop5assembly_by_requesters_chart === appsmith.store.top5_ac_name) {
              // If the clicked data point is already selected, reset the selection
              storeValue('top5_ac_name', null);
            } else {
              // Otherwise, update the selected data point
              storeValue('top5_ac_name', clickedtop5assembly_by_requesters_chart);
            }
	 }
		
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}