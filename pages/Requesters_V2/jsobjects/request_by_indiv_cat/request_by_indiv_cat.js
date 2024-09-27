export default {
	myVar1: [],
	myVar2: {},
	gender_hl: '',
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]

		if (req_indiv_cat_chart.selectedDataPoint['rawEventData']['componentType'] == 'series') {
			// Get the clicked gender
			const clickedrequestor_indv_cat_chart = req_indiv_cat_chart.selectedDataPoint['rawEventData']['name'];  

			if (clickedrequestor_indv_cat_chart === appsmith.store.requestor_indv_cat_name) {
				// If the clicked data point is already selected, reset the selection
				storeValue('requestor_indv_cat_name', null);
			} else {
				// Otherwise, update the selected data point
				storeValue('requestor_indv_cat_name', clickedrequestor_indv_cat_chart);
			}
		}

	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}