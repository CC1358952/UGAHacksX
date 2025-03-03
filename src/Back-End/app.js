
const loadData = require('./readJson'); //import the read function

const jsonData = loadData();
if (jsonData) {
    const financialTermsArray = jsonData.financialTerms.map(vocabulary => ({
        term: vocabulary.term,
        definition: vocabulary.definition
    })); //store terms in array
    const financialAnalysisArray = jsonData.financialAnalysis.map(analysis => ({
        report: analysis.report,
        analysis: analysis.analysis
    })); //store analysis in an array
    const financialRatiosArray = jsonData.financialRatios.map(ratio => ({
        term: ratio.term,
        definition: ratio.definition,
        formula: ratio.formula
    })) //store ratios in an array

    //console.log(financialTermsArray);
    //console.log(financialAnalysisArray);
    //console.log(financialRatiosArray);
    //how to access the array:
    // const firstRatio = financialRatiosArray[0]; // First ratio object
    //console.log(firstRatio.term); // Output: "Current Ratio"
    //console.log(firstRatio.definition); // Output: "A liquidity ratio ..."
    //console.log(firstRatio.formula); // Output: "Current Assets / Current Liabilities"
}