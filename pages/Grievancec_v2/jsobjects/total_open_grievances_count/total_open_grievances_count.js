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

    const filteredData = grievancedataset_tnl.data.filter(req =>

      ["In Progress","Draft","Verified","In Review","Send For Correction"].includes(req.grievance_status) &&
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