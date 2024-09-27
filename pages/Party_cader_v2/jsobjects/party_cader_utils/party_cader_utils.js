export default {
    myVar1: [],
    myVar2: {},
    
    myFun1() {
        // Log the data from load_login_ui_elements
        const data = ui_elements_tnl.data[0];

        if (data && data.Theme && data.Palette) {
            const color_palette = data.Palette; // Correctly retrieve color_palette
            console.log(color_palette);
            return color_palette; // Return the palette data
        } else {
            console.warn("Palette data is not available");
            return null; // Return null if palette data is not available
        }
    },

    filterDataPoints({ data = [], filterTypes = [], excludeTypes = [] } = {}) {
        // Get current filter settings
        const {
            selectedMandals = [],
            selectedVillages = [],
            selectedGrievances = [],
            selectedCader = '',
            selectedCaderVillage = '',
            selectedCaderMandal = '',
            selectedTimeLine = '',
            selectedGrievanceName = ''
        } = this.getFilters();

        // Helper function to check if the filter should be applied
        const appliesFilter = (filterType, condition) => {
            if (excludeTypes.includes(filterType)) return true;
            return filterTypes.includes(filterType) || filterTypes.includes('*') ? condition : true;
        };

        // Filter the data based on the current filters
        const filteredData = data.filter(req => 
            appliesFilter('Mandals', selectedMandals.length === 0 || selectedMandals.includes(req.mandal)) &&
            appliesFilter('Villages', selectedVillages.length === 0 || selectedVillages.includes(req.village)) &&
            appliesFilter('GrievancesTypes', selectedGrievances.length === 0 || selectedGrievances.includes(req.requestor_grievances_name)) &&
            appliesFilter('Cader', selectedCader === '' || selectedCader.includes(req.name)) &&
            appliesFilter('CaderVillage', selectedCaderVillage === '' || selectedCaderVillage.includes(req.village)) &&
            appliesFilter('CaderMandal', selectedCaderMandal === '' || selectedCaderMandal.includes(req.mandal)) &&
            appliesFilter('CaderDateofReg', selectedTimeLine === '' || selectedTimeLine.includes(req.formatted_created_on)) &&
            appliesFilter('GrievanceName', selectedGrievanceName === '' || selectedGrievanceName.includes(req.requestor_grievances_name))
        );

        return filteredData;
    },

    getFilters() {
        // Access and return filters stored in an external store (appsmith.store)
        return {
            selectedMandals: appsmith.store.mandal_dropdown_store_values || [],
            selectedVillages: appsmith.store.village_dropdown_store_values || [],
            selectedGrievances: appsmith.store.grievance_store_values || [],
            selectedCader: appsmith.store.cader_name || '',
            selectedCaderVillage: appsmith.store.cader_village || '',
            selectedCaderMandal: appsmith.store.cader_mandal || '',
            selectedTimeLine: appsmith.store.date_of_grievance_reg || '',
            selectedGrievanceName: appsmith.store.grievance_type || '',
            chart_color_palette: this.myFun1() // Call myFun1 to get color_palette
        };
    }
    // Additional methods can be added here if necessary
};
