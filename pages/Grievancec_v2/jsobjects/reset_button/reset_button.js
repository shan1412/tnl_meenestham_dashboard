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
		resetWidget('village_multifilter');
		resetWidget('grievanc_req_type_multi_filter'); 
		resetWidget('assembly_cons_multifilter');
		resetWidget('Mandal_cons_multifilter');
		
		// Clear selected values
		this.clearSelectedValues();
	},

	clearSelectedValues() {
		// Clear the selected values for each dropdown
		storeValue('village_multifilter', []);
		storeValue('grievanc_req_type_multi_filter', []);
		storeValue('assembly_cons_multifilter', []);
		storeValue('Mandal_cons_multifilter', []);

		// You can add more dropdowns here
	}
}
