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
		resetWidget('mandal_dropdown');
		resetWidget('village_dropdown'); 
		
		// Clear selected values
		this.clearSelectedValues();
	},

	clearSelectedValues() {
		// Clear the selected values for each dropdown
		storeValue('mandal_dropdown', []);
		storeValue('village_dropdown', []);

		// You can add more dropdowns here
	}
}
