export default {
    myVar1: [],
    myVar2: {},

    myFun1() {
        // Log the data from load_login_ui_elements
        const data = ui_elements.data[0];
				

        if (data && data.Theme && data.Palette) {
            const color_palette = data.Palette; // Correctly retrieve color_palette
						console.log(color_palette)
            return color_palette; // Return the palette data
        } else {
            console.warn("Palette data is not available");
            return null; // Return null if palette data is not available
        }
    },

    filterDataPoints({ data = [], filterTypes = [], excludeTypes = [], includeOnDemand = [] } = {}) {
        const {
            selected_ac_names,
            selected_grievance_mandal,
            selected_grievance_village,
            selectedGrievanceTypeNames,
            selected_grievance_time_line,
            selected_grievance_source,
            selectedGranularity,
            selectedGrievanceageReport,
            selectedGrievanceRequestType,
            selectGrievanceByConstituency,
            selectGrievanceByPc,
            selectGrievanceByMandal,
            selectGrievanceByVillage,
            selectedGrievancePriority,
            selectGrievanceByLocationspecific,
            selectGrievanceByIndiv_cat,
            selectedGrievanceByAssociationCat,
            chart_color_palette // Include color_palette here
        } = this.getFilters();

        const appliesFilter = (filterType, condition) => {
            if (excludeTypes.includes(filterType)) return true;

            return filterTypes.includes(filterType) || filterTypes.includes('*') ? condition : true;
        };

        const filteredData = data.filter(req => 
            appliesFilter('TypeNames', selectedGrievanceTypeNames.length === 0 || selectedGrievanceTypeNames.includes(req.grievance_type)) &&
            appliesFilter('GrievanceSource', selected_grievance_source === '' || selected_grievance_source === req.source) &&
            appliesFilter('AcNames', selected_ac_names.length === 0 || selected_ac_names.includes(req.request_ac_name)) &&
            appliesFilter('Mandal', selected_grievance_mandal.length === 0 || selected_grievance_mandal.includes(req.request_mandal)) &&
            appliesFilter('Village', selected_grievance_village.length === 0 || selected_grievance_village.includes(req.request_village)) &&
            appliesFilter('RequestType', selectedGrievanceRequestType === '' || selectedGrievanceRequestType === req.grievance_type) &&
            appliesFilter('AgeReport', selectedGrievanceageReport === '' || selectedGrievanceageReport === req.age_category) &&
            appliesFilter('ByConstituency', selectGrievanceByConstituency === '' || selectGrievanceByConstituency === req.request_ac_name) &&
            appliesFilter('ByMandal', selectGrievanceByMandal === '' || selectGrievanceByMandal === req.request_mandal) &&
            appliesFilter('ByVillage', selectGrievanceByVillage === '' || selectGrievanceByVillage === req.request_village) &&
            appliesFilter('Priority', selectedGrievancePriority === '' || selectedGrievancePriority === req.priority) &&
            appliesFilter('ByLocationspecific', selectGrievanceByLocationspecific === '' || selectGrievanceByLocationspecific === req.is_location_specific) &&
            appliesFilter('TimeLine', selected_grievance_time_line === '' || selected_grievance_time_line.includes(req.formatted_created_on)) &&
            appliesFilter('ByPc', selectGrievanceByPc === '' || selectGrievanceByPc === req.request_pc_name) &&
            appliesFilter('ByIndivCat', selectGrievanceByIndiv_cat === '' || req.requestor_tags?.includes(selectGrievanceByIndiv_cat)) &&
            appliesFilter('ByAssociationCat', selectedGrievanceByAssociationCat === '' || req.requestor_tags?.includes(selectedGrievanceByAssociationCat)) &&
            appliesFilter('Granularity', selectedGranularity === '' || selectedGranularity === req.location_granularity)
        );

        return filteredData;
    },

    getFilters() {
        const selected_ac_names = appsmith.store.selected_ac_names || [];
        const selected_grievance_mandal = appsmith.store.selected_grivence_Mandal || [];
        const selected_grievance_village = appsmith.store.selected_griveance_villages || [];
        const selectedGrievanceTypeNames = appsmith.store.selected_griveance_type_selected_values || [];
        const selected_grievance_time_line = appsmith.store.grievence_time_line || '';
        const selected_grievance_source = appsmith.store.grievance_source || '';
        const selectedGranularity = appsmith.store.granularity_datapoint || '';
        const selectedGrievanceageReport = appsmith.store.grievance_age_data_point || '';
        const selectedGrievanceRequestType = appsmith.store.grievanceRequestType_name || '';
        const selectGrievanceByConstituency = appsmith.store.grievence_by_constituency || '';
        const selectGrievanceByPc = appsmith.store.grievence_by_parliment_constituency || '';
        const selectGrievanceByMandal = appsmith.store.grievence_by_mandal || '';
        const selectGrievanceByVillage = appsmith.store.grievence_by_village || '';
        const selectedGrievancePriority = appsmith.store.priority_datapoint || '';
        const selectGrievanceByLocationspecific = appsmith.store.grievance_locationSpecific || '';
        const selectGrievanceByIndiv_cat = appsmith.store.grievance_by_indiv_cat || '';
        const selectedGrievanceByAssociationCat = appsmith.store.grievance_by_associ_cat || '';

        const chart_color_palette = this.myFun1(); // Call myFun1 to get color_palette

        return {
            selected_ac_names,
            selected_grievance_mandal,
            selected_grievance_village,
            selectedGrievanceTypeNames,
            selected_grievance_time_line,
            selected_grievance_source,
            selectedGranularity,
            selectedGrievanceageReport,
            selectedGrievanceRequestType,
            selectGrievanceByConstituency,
            selectGrievanceByPc,
            selectGrievanceByMandal,
            selectGrievanceByVillage,
            selectedGrievancePriority,
            selectGrievanceByLocationspecific,
            selectGrievanceByIndiv_cat,
            selectedGrievanceByAssociationCat,
            chart_color_palette // Include color_palette in the returned object
        };
    }
};
