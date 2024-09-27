export default {
	myVar1: [],
	myVar2: {},

	// Function to calculate and return data for the cards
	getCardData() {
		// Filter the dataset based on selected filters
		const filteredData = party_cader_utils.filterDataPoints({
			data: party_cader_dataset_tnl.data,
			filterTypes: '*',
			excludeTypes: [] // No fields are excluded
		});

		// Helper function to convert grievances into an array if needed
		const getGrievancesArray = (grievances) => {
			if (Array.isArray(grievances)) {
				return grievances; // Return as-is if it's already an array
			} else if (typeof grievances === 'string') {
				// If it's a string, you may want to split it (assuming a comma-separated string)
				return grievances.split(',');
			} else if (typeof grievances === 'object' && grievances !== null) {
				// If it's an object, handle it as needed (e.g., convert values to an array if relevant)
				return Object.values(grievances);
			}
			return []; // Default to an empty array if none of the above
		};

		// Calculate total caders
		const totalCaders = filteredData.length;

		// Calculate total grievances
		// const totalGrievances = filteredData.reduce((acc, cader) => {
			// const grievances = getGrievancesArray(cader.requestor_grievances);
			// return acc + grievances.length;
		// }, 0);
		// Calculate total unique grievances
		const totalUniqueGrievances = filteredData.reduce((acc, cader) => {
				const grievances = getGrievancesArray(cader.requestor_grievances);

				// Add unique grievances to the accumulator
				grievances.forEach(grievance => {
						acc.add(grievance); // Assuming grievances are unique strings or objects
				});

				return acc;
		}, new Set());

		// Get the total count of unique grievances
		const uniqueGrievanceCount = totalUniqueGrievances.size;


		// Calculate open grievances
		const openGrievances = filteredData.reduce((acc, cader) => {
			const grievances = getGrievancesArray(cader.requestor_grievances);
			const openCount = grievances.filter(grievance => grievance.status === "open").length;
			return acc + openCount;
		}, 0);

		// Calculate closed grievances
		const closedGrievances = filteredData.reduce((acc, cader) => {
			const grievances = getGrievancesArray(cader.requestor_grievances);
			const closedCount = grievances.filter(grievance => grievance.status === "closed").length;
			return acc + closedCount;
		}, 0);

		// Return the results
		return {
			totalCaders,
			uniqueGrievanceCount,
			openGrievances,
			closedGrievances
		};
	},
};
