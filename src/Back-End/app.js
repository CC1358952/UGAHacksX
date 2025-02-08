
const loadData = require('./readJson'); //import the read function

const jsonData = loadData();
if (jsonData) {
    const financialTermsArray = jsonData.financialTerms.map(vocabulary => ({
        term: vocabulary.term,
        definition: vocabulary.definition
    })); //store terms in array
    const financialAnalysisArray = jsonData.financialAnalysis; //store analysis in an array
    const financialRatiosArray = jsonData.financialRatios; //store ratios in an array

    console.log(financialTermsArray);
}