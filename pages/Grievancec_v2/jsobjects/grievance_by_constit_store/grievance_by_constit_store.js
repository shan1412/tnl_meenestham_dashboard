export default {
    myVar1: [],
    myVar2: {},
    gender_hl: '',
    selectedConstituency: null, // New variable to track selected constituency

    myFun1() {
        // Check if the clicked component is a series
        if (grievances_constit_wise_chart.selectedDataPoint['rawEventData']['componentType'] === 'series') {
            // Get the clicked constituency name
            const clickedConstituency = grievances_constit_wise_chart.selectedDataPoint['rawEventData']['name'];

            // Restrict click action on "Others"
            if (clickedConstituency === 'Others') {
                console.log('Click on "Others" category is restricted.');
                return; // Prevent further actions for "Others"
            }

            // Handle click for other categories
            if (this.selectedConstituency === clickedConstituency) {
                // If the clicked data point is already selected, reset the selection
                this.selectedConstituency = null; 
                storeValue('grievence_by_constituency', null);
            } else {
                // Otherwise, update the selected data point
                this.selectedConstituency = clickedConstituency;
                storeValue('grievence_by_constituency', clickedConstituency);
            }
        }
    },

    async myFun2() {
        // Use async-await or promises
        // await storeValue('varName', 'hello world')
    }
}
