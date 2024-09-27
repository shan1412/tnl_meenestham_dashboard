export default {
    myVar1: [],
    myVar2: {},
    
    // Function to aggregate data, format it into the required structure, and sort it by grievance count
    myFun1() {
        // Assuming 'party_cader_utils' and 'party_cader_dataset' are accessible in the current scope

        // Retrieve selected filter values
        const { selectedCader } = party_cader_utils.getFilters();

        // Filter the dataset based on selected filters
        const filteredData = party_cader_utils.filterDataPoints({
            data: party_cader_dataset.data,
            filterTypes: '*',
            excludeTypes: [] // Adjusted to not exclude anything
        });

        // Aggregate data by unique combinations of requester details
        const aggregatedData = filteredData.reduce((acc, req) => {
            const key = `${req.name}, AC: ${req.constituency_name}, Mandal: ${req.mandal}, Village: ${req.village}, Mobile: ${req.mobile}`;

            if (!acc[key]) {
                acc[key] = {
                    count: 0,
                    color: req.requestor_type_name === 'Association' ? '#D32F2F' : '#EEC861' // Red for Association, Yellow otherwise
                };
            }

            acc[key].count += 1;

            return acc;
        }, {});

        // Convert aggregated data into the required output format with grievance count
        this.myVar1 = Object.keys(aggregatedData).map((key, index) => {
            return {
                id: `00${index + 1}`, // Creating unique ids (assuming it's sequential)
                name: key, // Using the key which contains the name and other details
                img: aggregatedData[key].count // Replacing the 'img' field with the count of grievances
            };
        });

        // Sort the data in descending order based on the 'img' (grievance count)
        this.myVar1.sort((a, b) => b.img - a.img);

        console.log(this.myVar1); // Output the result for debugging
    },

    // Async function for future use (can be customized)
    async myFun2() {
        // Example of storing a value asynchronously
        await storeValue('varName', 'hello world');
    }
};
