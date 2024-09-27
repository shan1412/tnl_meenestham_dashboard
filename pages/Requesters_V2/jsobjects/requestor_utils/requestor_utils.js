export default {
	myVar1: [],
	myVar2: {},
	alertShown: false,  // Flag to track if alert has been shown
	
    myFun1() {
        // Log the data from load_login_ui_elements
        const data = ui_elements_tnl.data[0]
				

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
			selectedRequestByIndivCats,
			selectedReqAssociationCats,
			selectedAcNames,
			selectedMandals,
			selectedVillages,
			selectedGender,
			selectedRequestorTypeName,
			selectedRequestByIndivCat,
			selectedAssociationCat,
			selectedAssemblyConstituencyName,
			selectedMandal,
			selectedVillage,
			selectedRequester,
			chart_color_palette
		} = this.getFilters();

		const appliesFilter = (filterType, condition) => {
			if (excludeTypes.includes(filterType)) return true;
			return filterTypes.includes(filterType) || filterTypes.includes('*') ? condition : true;
		};

		const filteredData = data.filter(req =>
			appliesFilter('IndvCats', selectedRequestByIndivCats.length === 0 || req.tags.some(tag => selectedRequestByIndivCats.includes(tag))) &&
			appliesFilter('AssociCats', selectedReqAssociationCats.length === 0 || req.tags.some(tag => selectedReqAssociationCats.includes(tag))) &&
			appliesFilter('AcNames', selectedAcNames.length === 0 || selectedAcNames.includes(req.constituency_name)) &&
			appliesFilter('Mandal', selectedMandals.length === 0 || selectedMandals.includes(req.mandal)) &&
			appliesFilter('Village', selectedVillages.length === 0 || selectedVillages.includes(req.village)) &&
			appliesFilter('ByGender', selectedGender === '' || selectedGender === req.gender) &&
			appliesFilter('ByRequestorType', selectedRequestorTypeName === '' || selectedRequestorTypeName === req.requestor_type_name) &&
			appliesFilter('ByIndvcat', selectedRequestByIndivCat === '' || req.tags.includes(selectedRequestByIndivCat)) &&
			appliesFilter('ByAssocicat', selectedAssociationCat === '' || req.tags.includes(selectedAssociationCat)) &&
			appliesFilter('ByAC', selectedAssemblyConstituencyName === '' || selectedAssemblyConstituencyName === req.constituency_name) &&
			appliesFilter('ByMandal', selectedMandal === '' || selectedMandal === req.mandal) &&
			appliesFilter('ByVillage', selectedVillage === '' || selectedVillage === req.village) &&
			appliesFilter('ByReq_name', selectedRequester === '' || selectedRequester === req.name)
		);

		// Check if filteredData is empty and alert hasn't been shown
		if (filteredData.length === 0 && !this.alertShown) {
			showAlert("No data is available for the selected filters. Please consider adjusting your selections or resetting the filters to view available data.");
			this.alertShown = true;  // Set flag to true to prevent multiple alerts
		} else if (filteredData.length > 0) {
			this.alertShown = false;  // Reset alert flag if data is found
		}

		return filteredData;
	},

	getFilters() {
		const selectedRequestByIndivCats = appsmith.store.req_indv_cat_selected_values || [];
		const selectedReqAssociationCats = appsmith.store.req_associ_cat_selected_values || [];
		const selectedAcNames = appsmith.store.req_assembly_constituency_selected_names || [];
		const selectedMandals = appsmith.store.req_mandal_selected_values || [];
		const selectedVillages = appsmith.store.req_village_selected_values || [];

		const selectedGender = appsmith.store.gender_datapoint || '';
		const selectedRequestorTypeName = appsmith.store.requestor_type_name || '';
		const selectedRequestByIndivCat = appsmith.store.requestor_indv_cat_name || '';
		const selectedAssemblyConstituencyName = appsmith.store.top5_ac_name || '';
		const selectedMandal = appsmith.store.top5_mandal_name || '';
		const selectedRequester = appsmith.store.top5requester_name || '';
		const selectedAssociationCat = appsmith.store.requestor_association_cat_name || '';
		const selectedVillage = appsmith.store.top5_village_name || '';
		
		const chart_color_palette = this.myFun1(); // Call myFun1 to get color_palette

		return {
			selectedRequestByIndivCats,
			selectedReqAssociationCats,
			selectedAcNames,
			selectedMandals,
			selectedVillages,
			selectedGender,
			selectedRequestorTypeName,
			selectedRequestByIndivCat,
			selectedAssemblyConstituencyName,
			selectedAssociationCat,
			selectedMandal,
			selectedVillage,
			selectedRequester,
			chart_color_palette
		};
	}
};
