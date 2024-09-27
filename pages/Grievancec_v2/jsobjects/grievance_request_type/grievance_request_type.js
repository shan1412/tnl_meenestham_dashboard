export default {
	myVar1: [],
	myVar2: {},
	gender_hl: '',
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
		
	 if (grievance_age_report_chart.selectedDataPoint['rawEventData']['componentType'] == 'series') {
            const clickedGrievance_request_type = grievance_age_report_chart.selectedDataPoint['rawEventData']['name'];  // Get the clicked gender

            if (clickedGrievance_request_type === appsmith.store.grievance_request_type_datapoint) {
              // If the clicked data point is already selected, reset the selection
              storeValue('grievance_request_type_datapoint', null);
            } else {
              // Otherwise, update the selected data point
              storeValue('grievance_request_type_datapoint', clickedGrievance_request_type);
            }
	 }
		
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}