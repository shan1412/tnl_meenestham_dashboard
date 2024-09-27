export default {
  myVar1: [],
  myVar2: {},

  myFun1() {
    const selected_grievance_time_line = appsmith.store.grievence_time_line || '';
    const selectedGranularity = appsmith.store.granularity_datapoint || '';
    const selectedGrievanceageReport = appsmith.store.grievance_age_data_point || '';
    const selectedGrievanceRequestType = appsmith.store.grievanceRequestType_name || '';
    const selectGrievanceByConstituency = appsmith.store.grievence_by_constituency || '';
    const selectGrievanceByPc = appsmith.store.grievence_by_parliament_constituency || '';
    const selectGrievanceByMandal = appsmith.store.grievence_by_mandal || '';
    const selectGrievanceByVillage = appsmith.store.grievence_by_village || '';
    const selectedGrievancePriority = appsmith.store.priority_datapoint || '';
    const selectGrievanceByLocationspecific = appsmith.store.grievance_locationSpecific || '';

    const selected_ac_names = appsmith.store.selected_ac_names || [];
    const selected_grievance_mandal = appsmith.store.selected_grivence_Mandal || [];
    const selected_grievance_village = appsmith.store.selected_griveance_villages || [];

    const filteredData = grievancesdataset_dev.data.filter(req =>
      !['Draft', 'In Review', 'Verified', 'Sent for Correction', 'In Progress'].includes(req.grievance_status) &&
      (selectedGranularity === '' || selectedGranularity.includes(req.location_granularity)) &&
      (selectedGrievanceRequestType === '' || selectedGrievanceRequestType.includes(req.grievance_type)) &&
      (selectGrievanceByConstituency === '' || selectGrievanceByConstituency.includes(req.request_ac_name)) &&
      (selectGrievanceByMandal === '' || selectGrievanceByMandal.includes(req.request_mandal)) &&
      (selectGrievanceByVillage === '' || selectGrievanceByVillage.includes(req.request_village)) &&
      (selectedGrievancePriority === '' || selectedGrievancePriority.includes(req.priority)) &&
      (selectedGrievanceageReport === '' || selectedGrievanceageReport.includes(req.age_category)) &&
      (selectGrievanceByPc === '' || selectGrievanceByPc.includes(req.request_pc_name)) &&
      (selectGrievanceByLocationspecific === '' || selectGrievanceByLocationspecific.includes(req.is_location_specific)) &&
      (selected_ac_names.length === 0 || selected_ac_names.includes(req.request_ac_name)) &&
      (selected_grievance_mandal.length === 0 || selected_grievance_mandal.includes(req.grievance_type)) &&
      (selected_grievance_village.length === 0 || selected_grievance_village.includes(req.request_village))
    );
		console.log(filteredData)
    // Get the count of filtered grievances
    const grievanceCount = filteredData.length;

    // Aggregate based on the 'source' column, counting occurrences of each source
    const sourceAggregation = filteredData.reduce((acc, req) => {
      const source = req.source || 'Unknown'; // Handle cases where 'source' might be missing
      if (!acc[source]) {
        acc[source] = { count: 0, totalAgeInDays: 0 };
      }
      acc[source].count += 1;  // Increment the count for each source
      acc[source].totalAgeInDays += req.age_in_days || 0;  // Accumulate total age in days
      return acc;
    }, {});

    // Replace undefined values with "Data Insufficient"
    const sourceAggregationWithData = Object.keys(sourceAggregation).reduce((acc, source) => {
      const data = sourceAggregation[source];
      const avgAgeInDays = data.count > 0 ? data.totalAgeInDays / data.count : 0;
      const days = Math.floor(avgAgeInDays);
      const hours = Math.floor((avgAgeInDays - days) * 24);
      acc[source] = {
        count: data.count || "Data Insufficient",
        avgAge: data.count > 0 ? `${days}Days, ${hours}Hrs` : "Data Insufficient"
      };
      return acc;
    }, {});

    // Calculate the overall average age
    const totalAgeInDays = filteredData.reduce((sum, req) => sum + (req.age_in_days || 0), 0);
    const avgAgeInDaysOverall = filteredData.length > 0 ? totalAgeInDays / filteredData.length : 0;
    const overallDays = Math.floor(avgAgeInDaysOverall);
    const overallHours = Math.floor((avgAgeInDaysOverall - overallDays) * 24);

    // Ensure grievanceCount is a number or "Data Insufficient"
    const validGrievanceCount = typeof grievanceCount === 'number' ? grievanceCount : "Data Insufficient";

    // Return both the grievance count, source aggregation with averages, and overall average ticket time
    return {
      grievanceCount: validGrievanceCount,
      sourceAggregation: sourceAggregationWithData,
      avgTicketTimeOverall: filteredData.length > 0 ? `${overallDays}Days, ${overallHours}Hrs` : "Data Insufficient"
    };
  },

  async myFun2() {
    // Example async function using async-await or promises
    // await storeValue('varName', 'hello world');
  }
};
