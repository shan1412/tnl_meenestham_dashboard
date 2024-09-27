export default {
	myVar1: [],
	myVar2: {},
	gender_hl: '',
	myFun1() {
		// Ensure that only the selected data point is clickable
		if (grievance_by_associ_cat_chart.selectedDataPoint['rawEventData']['componentType'] == 'series') {
			const clickedgrievance_by_associ_cat_chart = grievance_by_associ_cat_chart.selectedDataPoint['rawEventData']['name'];  // Get the clicked data point name
			
			// Restrict click action on "Others"
			if (clickedgrievance_by_associ_cat_chart === 'Others') {
				console.log('Click on "Others" category is restricted.');
				return;  // Prevent further actions for "Others"
			}
			
			// Check if the clicked point is already selected
			if (clickedgrievance_by_associ_cat_chart === appsmith.store.grievance_by_associ_cat) {
				console.log('if', clickedgrievance_by_associ_cat_chart);
				// If the clicked point is already selected, reset it to null
				storeValue('grievance_by_associ_cat', null);
			} else {
				console.log('else', clickedgrievance_by_associ_cat_chart);
				// If no point is selected, update with the newly clicked point
				storeValue('grievance_by_associ_cat', clickedgrievance_by_associ_cat_chart);
			}
		}
	},
	async myFun2() {
		// Use async-await or promises for any asynchronous operations
		// await storeValue('varName', 'hello world')
	}
}
