
const fs = require('fs');

const loadData = () => {

    try {
        const data = fs.readFileSync('apis.json', 'utf-8'); //read JSON file synchronously
        return JSON.parse(data); //convert JSON string to JavaScript object
    } catch (error) {
        console.error("Error reading JSON file:", error);
        return null;
    }
};
module.exports = loadData; //export function for use in another file