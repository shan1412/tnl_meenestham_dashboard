export default {
  myVar1: [],
  myVar2: {},
  gender_hl: '',
  
  myFun1() {
    // Function to format the date as YYYY-MM-DD
    function formatDate(dateStr) {
      const date = new Date(dateStr);
      if (isNaN(date)) return ''; // Handle invalid date
      return date.toISOString().split('T')[0]; // Formats date as YYYY-MM-DD
    }
    
    // Check if a series component was clicked in the chart
    if (grievances_over_time.selectedDataPoint['rawEventData']['componentType'] === 'series') {
      // Get the clicked date from the chart and format it
      const clickedgrievances_over_time_chart = formatDate(grievances_over_time.selectedDataPoint['rawEventData']['name']);
      console.log(clickedgrievances_over_time_chart)
      // Compare the clicked date with the currently selected date in the store
      if (clickedgrievances_over_time_chart === appsmith.store.grievence_time_line) {
        // If the clicked data point is already selected, reset the selection
        storeValue('grievence_time_line', null);
      } else {
        // Otherwise, update the store with the new selected data point
        storeValue('grievence_time_line', clickedgrievances_over_time_chart);
      }
    }
  },

  async myFun2() {
    // Use async-await or promises
    await storeValue('varName', 'hello world');
  }
};
