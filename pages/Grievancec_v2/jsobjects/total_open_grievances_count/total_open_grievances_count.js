export default {
  myVar1: [],
  myVar2: {},

  myFun1() {
        // Filter the dataset based on selected filters
    const filteredData = utills.filterDataPoints({
        data: grievancedataset_tnl.data,
        filterTypes: '*',
        excludeTypes: []
    });
		
    // Get the count of filtered grievances
    const grievanceCount = filteredData.filter(req =>["In Progress","Draft","Verified","In Review","Send For Correction"].includes(req.grievance_status)).length;

    // Aggregate based on the 'source' column, counting occurrences of each source
    const sourceAggregation = filteredData.filter(req =>["In Progress","Draft","Verified","In Review","Send For Correction"].includes(req.grievance_status)).reduce((acc, req) => {
      const source = req.source || 'Unknown'; // Handle cases where 'source' might be missing
      if (!acc[source]) {
        acc[source] = 0;
      }
      acc[source] += 1;  // Increment the count for each source
      return acc;
    }, {});

    // Check if the values for PGRS and Meenestham are undefined and return 0 instead
    const PGRSValue = sourceAggregation['PGRS'] !== undefined ? sourceAggregation['PGRS'] : 0;
    const MeenesthamValue = sourceAggregation['Meenestham'] !== undefined ? sourceAggregation['Meenestham'] : 0;

    // Return both the grievance count and the source aggregation, including PGRS and Meenestham with default of 0
    return {
      grievanceCount: grievanceCount,
      sourceAggregation: { ...sourceAggregation, PGRS: PGRSValue, Meenestham: MeenesthamValue }
    };
  },

  async myFun2() {
    // Example async function using async-await or promises
    // await storeValue('varName', 'hello world');
  }
};
