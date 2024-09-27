export default {
  myVar1: [],
  myVar2: {},

  myFun1() {
    // Filter the dataset based on selected filters
    const filteredData = utills.filterDataPoints({
        data: grievancesdataset_dev.data,
        filterTypes: '*',
        excludeTypes: []
    });

    // Get the count of filtered grievances
    const grievanceCount = filteredData.length;

    // Aggregate based on the 'source' column, counting occurrences of each source
    const sourceAggregation = filteredData.reduce((acc, req) => {
      const source = req.source || ''; // Handle cases where 'source' might be missing
      if (!acc[source]) {
        acc[source] = 0;
      }
      acc[source] += 1;  // Increment the count for each source
      return acc;
    }, {});

    // Ensure PGRS and Meenestham default to 0 if they are undefined
    const PGRSValue = sourceAggregation['PGRS'] !== undefined ? sourceAggregation['PGRS'] : 0;
    const MeenesthamValue = sourceAggregation['Meenestham'] !== undefined ? sourceAggregation['Meenestham'] : 0;

    // Return both the grievance count and the source aggregation, including PGRS and Meenestham with default values
    return {
      grievanceCount: grievanceCount,
      sourceAggregation: { ...sourceAggregation, PGRS: PGRSValue, Meenestham: MeenesthamValue },
      data: filteredData
    };
  },

  async myFun2() {
    // Example async function using async-await or promises
    // await storeValue('varName', 'hello world');
  }
};
