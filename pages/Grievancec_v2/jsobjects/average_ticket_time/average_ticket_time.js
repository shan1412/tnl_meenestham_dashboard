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
    const grievanceCount = filteredData.length;

    // Aggregate based on the 'source' column, counting occurrences of each source
    const sourceAggregation = filteredData.reduce((acc, req) => {
      const source = req.source || 'Unknown'; // Handle cases where 'source' might be missing
      if (!acc[source]) {
        acc[source] = { count: 0, totalAgeInDays: 0 };
      }
      const ageInDays = Math.max(req.age_in_days || 0, 0); // Ensure non-negative age
      acc[source].count += 1;  // Increment the count for each source
      acc[source].totalAgeInDays += ageInDays;  // Accumulate total age in days
      return acc;
    }, {});

    // Replace undefined values with "Data Insufficient"
    const sourceAggregationWithData = Object.keys(sourceAggregation).reduce((acc, source) => {
      const data = sourceAggregation[source];
      const avgAgeInDays = data.count > 0 ? data.totalAgeInDays / data.count : 0;
      const days = Math.max(Math.floor(avgAgeInDays), 0); // Ensure no negative days
      const hours = Math.max(Math.floor((avgAgeInDays - days) * 24), 0); // Ensure no negative hours
      acc[source] = {
        count: data.count || "Data Insufficient",
        avgAge: data.count > 0 ? `${days}Days, ${hours}Hrs` : "Data Insufficient"
      };
      return acc;
    }, {});

    // Calculate the overall average age
    const totalAgeInDays = filteredData.reduce((sum, req) => sum + Math.max(req.age_in_days || 0, 0), 0); // Ensure non-negative sum
    const avgAgeInDaysOverall = grievanceCount > 0 ? totalAgeInDays / grievanceCount : 0;
    const overallDays = Math.max(Math.floor(avgAgeInDaysOverall), 0); // Ensure no negative days
    const overallHours = Math.max(Math.floor((avgAgeInDaysOverall - overallDays) * 24), 0); // Ensure no negative hours

    // Ensure grievanceCount is a number or "Data Insufficient"
    const validGrievanceCount = typeof grievanceCount === 'number' && grievanceCount >= 0 ? grievanceCount : "Data Insufficient";

    // Return both the grievance count, source aggregation with averages, and overall average ticket time
    return {
      grievanceCount: validGrievanceCount,
      sourceAggregation: sourceAggregationWithData,
      avgTicketTimeOverall: grievanceCount > 0 ? `${overallDays}Days, ${overallHours}Hrs` : "Data Insufficient"
    };
  },

  async myFun2() {
    // Example async function using async-await or promises
    // await storeValue('varName', 'hello world');
  }
};
