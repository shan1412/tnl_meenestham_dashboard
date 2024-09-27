export default {
	myVar1: [],
	myVar2: {},
	gender_hl: '',
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]

		if (cadre_trend_chart.selectedDataPoint['rawEventData']['componentType'] == 'series') {
			// Get the clicked gender
			const clickedcadre_trend_chart = cadre_trend_chart.selectedDataPoint['rawEventData']['name'];  

			if (clickedcadre_trend_chart === appsmith.store.cader_timeline) {
				// If the clicked data point is already selected, reset the selection
				storeValue('cader_timeline', null);
			} else {
				// Otherwise, update the selected data point
				storeValue('cader_timeline', clickedcadre_trend_chart);
			}
		}

	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}