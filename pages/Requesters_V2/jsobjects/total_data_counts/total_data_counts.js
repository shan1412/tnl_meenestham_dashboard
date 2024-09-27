export default {
  myVar1: [],
  myVar2: {},

  myFun1() {

    // Filter the dataset based on selected filters
    const filteredData = requestor_utils.filterDataPoints({
      data: requestordataset_tnl.data,
      filterTypes: '*',
      excludeTypes: []
    });

    // // Log filtered data for debugging
    // console.log("Filtered Data: ", filteredData);

    // Get the count of filtered grievances
    const requestorsCount = filteredData.length;

    // Count Individuals and Associations
    const individualCount = filteredData.filter(req => req.requestor_type_name === 'Individual').length;
    const associationCount = filteredData.filter(req => req.requestor_type_name === 'Association').length;

    // Log counts for debugging
    // console.log("Individual Count: ", individualCount);
    // console.log("Association Count: ", associationCount);

    // Return the grievance count, data, and aggregated totals
    return {
      grievanceCount: requestorsCount,
      individualCount: individualCount,
      associationCount: associationCount,
      data: filteredData
    };
  },

  async myFun2() {
    // Example async function using async-await or promises
    // await storeValue('varName', 'hello world');
  }
};
