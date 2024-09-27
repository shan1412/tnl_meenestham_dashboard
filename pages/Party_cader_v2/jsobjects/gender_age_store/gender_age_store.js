export default { 
  // Store variables
  myVar1: [],  // Array for storing various values
  myVar2: {},  // Object for more complex data storage
  gender_hl: '',  // Store selected gender highlight value

  // Function to handle data point selection in the chart
  myFun1() {
    // Check if the chart click is on a series
    if (cader_gender_age_chart.selectedDataPoint['rawEventData']['componentType'] === 'series') {
      // Get the name of the clicked data point (village or cader)
      const clickecader_gender_age_chart = cader_gender_age_chart.selectedDataPoint['rawEventData']['name'];  

      // Update the store value based on the clicked data point
      if (clickecader_gender_age_chart === appsmith.store.cader_gender_age_chart) {
        // If the clicked data point matches the current selected value, reset the selection
        storeValue('cader_village', null);
      } else {
        // Otherwise, update the store with the new selected value
        storeValue('cader_village', clickecader_gender_age_chart);
      }
    }
  },

  // Async function example for handling promises or async operations
  async myFun2() {
    // Perform async operations, e.g., fetching data or updating store
    try {
      // Example of setting a store value asynchronously
      await storeValue('varName', 'hello world');
      console.log('Store value updated successfully');
    } catch (error) {
      console.error('Error updating store value:', error);
    }
  }
}
