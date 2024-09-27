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
    const grievanceCount = filteredData.filter(req =>!["In Progress","Draft","Verified","In Review","Send For Correction"].includes(req.grievance_status)).length;

    // Aggregate based on the 'source' column, counting occurrences of each source
    const sourceAggregation = filteredData.filter(req =>!["In Progress","Draft","Verified","In Review","Send For Correction"].includes(req.grievance_status)).reduce((acc, req) => {
      const source = req.source || ' '; // Handle cases where 'source' might be missing
      if (!acc[source]) {
        acc[source] = { count: 0, totalAgeInDays: 0 };
      }
      acc[source].count += 1;  // Increment the count for each source
      acc[source].totalAgeInDays += req.age_in_days || 0;  // Accumulate total age in days
      return acc;
    }, {});

    // Ensure PGRS and Meenestham default to 'No Enough data to calculate' if they are undefined
    const PGRSValue = sourceAggregation['PGRS'] !== undefined ? sourceAggregation['PGRS'].count : 0;
    const MeenesthamValue = sourceAggregation['Meenestham'] !== undefined ? sourceAggregation['Meenestham'].count : 0;

    // Calculate average age and convert to days and hours for each source
    const sourceAggregationWithAverage = Object.keys(sourceAggregation).reduce((acc, source) => {
      const data = sourceAggregation[source];
      const avgAgeInDays = data.count > 0 ? data.totalAgeInDays / data.count : 0;
      const days = Math.floor(avgAgeInDays);
      const hours = Math.floor((avgAgeInDays - days) * 24);
      acc[source] = {
        count: data.count,
        avgAge: `${days}Days, ${hours}Hrs`
      };
      return acc;
    }, {});

    // Calculate the overall average age
    const totalAgeInDays = filteredData.filter(req =>!["In Progress","Draft","Verified","In Review","Send For Correction"].includes(req.grievance_status)).reduce((sum, req) => sum + (req.age_in_days || 0), 0);
    const avgAgeInDaysOverall = filteredData.length > 0 ? totalAgeInDays / filteredData.length : 0;
    const overallDays = Math.floor(avgAgeInDaysOverall);
    const overallHours = Math.floor((avgAgeInDaysOverall - overallDays) * 24);

    // Ensure grievanceCount is a number
    const validGrievanceCount = typeof grievanceCount === 'number' ? grievanceCount : '-';

    // Return both the grievance count, source aggregation with averages, and overall average ticket time
    return {
      grievanceCount: validGrievanceCount,
      sourceAggregation: { ...sourceAggregationWithAverage, PGRS: PGRSValue, Meenestham: MeenesthamValue },
      avgTicketTimeOverall: `${overallDays}Days, ${overallHours}Hrs`
    };
  },

  async myFun2() {
    // Example async function using async-await or promises
    // await storeValue('varName', 'hello world');
  }
};
