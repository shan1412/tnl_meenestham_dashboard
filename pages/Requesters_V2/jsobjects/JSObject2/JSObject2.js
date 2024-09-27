export default {
	myVar1: [],
	myVar2: {},
	gender_hl: '',
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
		
	 if (requestor_type_chart.selectedDataPoint['rawEventData']['componentType'] == 'series') {
            const clickedrequestor_type_chart = requestor_type_chart.selectedDataPoint['rawEventData']['name'];  // Get the clicked gender

            if (clickedrequestor_type_chart === appsmith.store.requestor_type_name) {
              // If the clicked data point is already selected, reset the selection
              storeValue('requestor_type_name', null);
            } else {
              // Otherwise, update the selected data point
              storeValue('requestor_type_name', clickedrequestor_type_chart);
            }
	 }
		
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}