
const loadData = require('./readJson'); //import the read function

const jsonData = loadData();
if (jsonData) {
    const financialTermsArray = jsonData.financialTerms; //store terms in array
    const financialAnalysisArray = jsonData.financialAnalysis; //store analysis in an array
}