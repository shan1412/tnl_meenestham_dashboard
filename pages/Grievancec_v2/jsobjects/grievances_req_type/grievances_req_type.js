export default {
    myVar1: [],
    myVar2: {},
    gender_hl: '',
    myFun1 () {
        // Check if the click event is from a series in the chart
        if (grievance_request_type_chart.selectedDataPoint['rawEventData']['componentType'] === 'series') {
            const clickedGrievanceRequestType = grievance_request_type_chart.selectedDataPoint['rawEventData']['name'];  // Get the clicked grievance type
            
            // Check if the clicked type is "Others"
            if (clickedGrievanceRequestType === 'Others') {
                // Optionally, you can show a message or handle the case if needed
                console.log("Clicking on 'Others' is restricted.");
                return; // Prevent further action if "Others" is clicked
            }

            // Handle selection for other grievance types
            if (clickedGrievanceRequestType === appsmith.store.grievanceRequestType_name) {
                // If the clicked data point is already selected, reset the selection
                storeValue('grievanceRequestType_name', null);
            } else {
                // Otherwise, update the selected data point
                storeValue('grievanceRequestType_name', clickedGrievanceRequestType);
            }
        }
    },
    async myFun2 () {
        // Use async-await or promises
        // await storeValue('varName', 'hello world')
    }
}
