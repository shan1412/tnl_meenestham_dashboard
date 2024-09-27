export default {
    myVar1: [],
    myVar2: {},
    gender_hl: '',
    myFun1() {
        // Check if the clicked component is a series
        if (grievances_village_wise_chart.selectedDataPoint['rawEventData']['componentType'] == 'series') {
            // Get the clicked gender
            const clickedgrievances_village_wise_chart = grievances_village_wise_chart.selectedDataPoint['rawEventData']['name'];

            // Restrict click action on "Others"
            if (clickedgrievances_village_wise_chart === 'Others') {
                console.log('Click on "Others" category is restricted.');
                return; // Prevent further actions for "Others"
            }

            // Handle click for other categories
            if (clickedgrievances_village_wise_chart === appsmith.store.grievence_by_village) {
                console.log('if', clickedgrievances_village_wise_chart);
                // If the clicked data point is already selected, reset the selection
                storeValue('grievence_by_village', null);
            } else {
                console.log('else', clickedgrievances_village_wise_chart);
                // Otherwise, update the selected data point
                storeValue('grievence_by_village', clickedgrievances_village_wise_chart);
            }
        }
    },
    async myFun2() {
        // Use async-await or promises
        // await storeValue('varName', 'hello world')
    }
}
