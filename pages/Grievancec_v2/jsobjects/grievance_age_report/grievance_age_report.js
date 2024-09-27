export default {
	myVar1: [],
	myVar2: {},
	gender_hl: '',
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
		
	 if (grievance_age_report_chart.selectedDataPoint['rawEventData']['componentType'] == 'series') {
		 				// Get the clicked gender
            const clickedgrievance_age_report_chart = grievance_age_report_chart.selectedDataPoint['rawEventData']['name'];  

            if (clickedgrievance_age_report_chart === appsmith.store.grievance_age_data_point) {
              // If the clicked data point is already selected, reset the selection
              storeValue('grievance_age_data_point', null);
            } else {
              // Otherwise, update the selected data point
              storeValue('grievance_age_data_point', clickedgrievance_age_report_chart);
            }
	 }
		
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}