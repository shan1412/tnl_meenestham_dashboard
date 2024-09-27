export default {
	myVar1: [],
	myVar2: {},
	gender_hl: '',
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]

		if (grievance_by_indiv_cat_chart.selectedDataPoint['rawEventData']['componentType'] == 'series') {
			const clickedgrievance_by_indiv_cat_chart = grievance_by_indiv_cat_chart.selectedDataPoint['rawEventData']['name'];  

			if (clickedgrievance_by_indiv_cat_chart === appsmith.store.grievance_by_indiv_cat) {
				// If the clicked data point is already selected, reset the selection
				console.log('if location_specific_select_store : ',clickedgrievance_by_indiv_cat_chart)
				storeValue('grievance_by_indiv_cat', null);
			} else {
				console.log('else location_specific_select_store : ',clickedgrievance_by_indiv_cat_chart)
				// Otherwise, update the selected data point
				storeValue('grievance_by_indiv_cat', clickedgrievance_by_indiv_cat_chart);
			}
		}

	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}