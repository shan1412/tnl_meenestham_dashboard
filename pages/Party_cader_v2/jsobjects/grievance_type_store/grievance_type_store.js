export default {
    myVar1: [],
    myVar2: {},
    gender_hl: '',

    myFun1() {
        // Example code to be written here
        // this.myVar1 = [1, 2, 3]

        if (grievance_name_chart.selectedDataPoint['rawEventData']['componentType'] === 'series') {
            // Get the clicked grievance name
            const clickedGrievanceName = grievance_name_chart.selectedDataPoint['rawEventData']['name'];

            if (clickedGrievanceName === appsmith.store.grievance_type) {
                // If the clicked data point is already selected, reset the selection
                storeValue('grievance_type', null);
            } else {
                // Otherwise, update the selected data point
                storeValue('grievance_type', clickedGrievanceName);
            }
        }
    },

    async myFun2() {
        // Example async code to be written here
        // await storeValue('varName', 'hello world')
    }
};
