export default {
	myVar1: [],
	myVar2: {},
	
	myFun1() {
		// Clear the store
		clearStore();

		// Clear all selected values from dropdowns
		this.clearDropdowns();
	},

	async myFun2() {
		// Example async function (not needed for reset, but here for reference)
	},

	clearDropdowns() {
		// Assuming dropdown widgets have these names
		resetWidget('req_indv_cat_multi_filter');
		resetWidget('req_associ_cat_multi_filter'); 
		resetWidget('assembly_cons_multifilter');
		resetWidget('mandal_multifilter');
		resetWidget('village_multifilter');
		// Clear selected values
		this.clearSelectedValues();
	},

	clearSelectedValues() {
		// Clear the selected values for each dropdown
		storeValue('req_indv_cat_multi_filter', []);
		storeValue('req_associ_cat_multi_filter', []);
		storeValue('assembly_cons_multifilter', []);
		storeValue('mandal_multifilter', []);
		storeValue('village_multifilter', []);

		// You can add more dropdowns here
	}
}
