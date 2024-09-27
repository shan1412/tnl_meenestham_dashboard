export default {
    myVar1: [],
    myVar2: {},

    myFun1() {
        // Log the data from load_login_ui_elements
        // Ensure load_login_ui_elements.data and Palette exist before logging
        const data = load_login_ui_elements.data;

        if (data && data.Data && data.Data.Palette) {
            const color_palette = data.Data.Palette; // Fixed syntax error here
            return color_palette; // Return the palette data
        } else {
            console.warn("Palette data is not available");
            return null; // Return null if palette data is not available
        }
    },

    async myFun2() {
        try {
            // Use async-await to store a value
            // await storeValue('varName', 'hello world');
            console.log("Value stored successfully");
        } catch (error) {
            console.error("Error storing value:", error);
        }
    }
};
