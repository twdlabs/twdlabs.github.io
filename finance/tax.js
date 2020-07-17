
/* Income Tax Calculator
	EDIT THIS
    Inputs: grossJobIncome (gross income earned)
            totalDeductions (total income deductions and exemptions)
            taxCredits (total tax credits)
            taxPaid (total taxes withheld from pay)
    Output: taxableIncome (adjusted gross income)
            taxExpense (sum of ax*rx)
            netIncome (net income earned)
            effRate (effective tax rate)
            amountDue (tax refund from IRS)
*/

var bracket = 0;
var bracketRate = [.10, .15, .25, .28, .33, .35, .396]; // marginal tax rates

function onClear() {
    // Clear all input & output
    
    $('.radioWrap input[type="radio"]').prop('checked', false);

    document.getElementById('grossJobIncome').value = "";
    document.getElementById('totalExemptions').value = "";
    document.getElementById('totalDeductions').value = "";
    document.getElementById('totalCredits').value = "";
    document.getElementById('taxPaid').value = "";
    
    document.getElementById('grossBizIncome').value = "";
    document.getElementById('costOfGoods').value = "";
    document.getElementById('bizExpenses').value = "";

    document.getElementById('netBusiness').innerHTML = "";

    $('.outputTable').css('display','none');
}

function setDefault() {
    document.getElementById('single').checked = true;
    
    document.getElementById('grossJobIncome').value = 100000;
    document.getElementById('totalExemptions').value = 0;
    document.getElementById('totalDeductions').value = 0;
    document.getElementById('totalCredits').value = 0;
    document.getElementById('taxPaid').value = 0;
    
    document.getElementById('grossBizIncome').value = 150000;
    document.getElementById('costOfGoods').value = 65000;
    document.getElementById('bizExpenses').value = 25000;
}

function setDependentStatus() {
    // Set 'number of dependents' to 0
    document.getElementById('numDependents').value = 0;
    
    // Hide or unhide 'independentArea' input based on checkbox value
    if(document.getElementById('isDependent').checked) {
        document.getElementById('independentArea').style.display="none";
        document.getElementById('totalExemptions').value = "0";
    }
    else {
        document.getElementById('independentArea').style.display="block";
        document.getElementById('numDependents').value = "1";
        setExemptionValue();
    }
    
}

function setExemptionValue() {
    // $4,050 for each exemption
    var numDependents = 1.0 * document.getElementById('numDependents').value;
    var result = 4050.0 * numDependents;
    
    // Exemption Phaseout
    
    var grossIncome = document.getElementById('grossJobIncome').value;
    var lowThreshold = [259400.0, 311300.0, 155650.0, 285350.0];
    var highThreshold = [381900.0, 433800.0, 216900.0, 407850.0];
    
    if(document.getElementById('single').checked && grossIncome>lowThreshold[0]) {
        if(grossIncome>highThreshold[0]) result = 0;
        else {
            var diff = grossIncome - lowThreshold[0];
            var numAbove = Math.ceil(diff / 2500.0);
            var proportion = 1.0 - (numAbove * .02);
            result = result * proportion;
        }
    }
    else if(document.getElementById('joint').checked && grossIncome>lowThreshold[1]) {
        if(grossIncome>highThreshold[1]) result = 0;
        else {
            var diff = grossIncome - lowThreshold[1];
            var numAbove = Math.ceil(diff / 2500.0);
            var proportion = 1.0 - (numAbove * .02);
            result = result * proportion;
        }
    }
    else if(document.getElementById('separate').checked && grossIncome>lowThreshold[2]) {
        if(grossIncome>highThreshold[2]) result = 0;
        else {
            var diff = grossIncome - lowThreshold[2];
            var numAbove = Math.ceil(diff / 2500.0);
            var proportion = 1.0 - (numAbove * .02);
            result = result * proportion;
        }
    }
    else if(document.getElementById('head').checked && grossIncome>lowThreshold[3]) {
        if(grossIncome>highThreshold[3]) result = 0;
        else {
            var diff = grossIncome - lowThreshold[3];
            var numAbove = Math.ceil(diff / 2500.0);
            var proportion = 1.0 - (numAbove * .02);
            result = result * proportion;
        }
    }
    
    document.getElementById('totalExemptions').value = (1.0 * result).toFixed(0);
}

function setDeductionValue() {
    
    if(document.getElementById('single').checked){
        document.getElementById('totalDeductions').value = "6300";
    }
    else if(document.getElementById('joint').checked){
        document.getElementById('totalDeductions').value = "12600";
    }
    else if(document.getElementById('separate').checked){
        document.getElementById('totalDeductions').value = "6300";
    }
    else if(document.getElementById('head').checked){
        document.getElementById('totalDeductions').value = "9300";
    }
    else{ // error value
        document.getElementById('totalDeductions').value = "0";
    }
    
}

function onSubmit() {
    // Save user input values
    var grossJobIncome = document.getElementById('grossJobIncome').value;
    var totalExemptions = document.getElementById('totalExemptions').value;
    var totalDeductions = document.getElementById('totalDeductions').value;
    var totalCredits = document.getElementById('totalCredits').value;
    var taxPaid = document.getElementById('taxPaid').value;

    var grossBizIncome = document.getElementById('grossBizIncome').value;
    var costOfGoods = document.getElementById('costOfGoods').value;
    var bizExpenses = document.getElementById('bizExpenses').value;
    
    var selection = null;
    if(document.getElementById('single').checked){
        selection = 0;
        document.getElementById('selection').innerHTML = "Single";
    }
    else if(document.getElementById('joint').checked){
        selection = 1;
        document.getElementById('selection').innerHTML = "Married Joint";
    }
    else if(document.getElementById('separate').checked){
        selection = 2;
        document.getElementById('selection').innerHTML = "Married Separate";
    }
    else if(document.getElementById('head').checked){
        selection = 3;
        document.getElementById('selection').innerHTML = "Head of Household";
    }
    else{ //  catch-all error message
        document.getElementById('selection').innerHTML = "[none]";
        alert('Please select a valid filer type.');
        return;
    }
    
    // Dummy proof for negative numbers
    if( grossJobIncome<0||totalExemptions<0||totalDeductions<0||totalCredits<0||taxPaid<0||grossBizIncome<0||costOfGoods<0||bizExpenses<0 ) {
        // Display an error message about positive numbers only
        alert('Positive numbers only');
        return;
    }
    
    // Calculate output values
    var netBusiness = grossBizIncome - costOfGoods - bizExpenses;
    var totalIncome = 1 * grossJobIncome + 1 * netBusiness;
    var taxableIncome = totalIncome - (totalExemptions + totalDeductions);
    var taxExpense = calcTax(taxableIncome, selection) - totalCredits;
    var netIncome = totalIncome - taxExpense;
    var marginalRate = 100 * bracketRate[bracket];
    var effRate = 100 * taxExpense/taxableIncome;
    var amountDue = (taxExpense - taxPaid) ;
    
    // Display output values
    document.getElementById('netBusiness').innerHTML = dollar(netBusiness);
    document.getElementById('totalIncome').innerHTML = dollar(totalIncome);
    document.getElementById('totalIncome2').innerHTML = dollar(totalIncome);
    document.getElementById('taxableIncome').innerHTML = dollar(taxableIncome);
    document.getElementById('taxExpense').innerHTML = dollar(taxExpense);
    document.getElementById('netIncome').innerHTML = dollar(netIncome);
    document.getElementById('marginalRate').innerHTML = marginalRate.toFixed(1) + "%";
    document.getElementById('effRate').innerHTML = effRate.toFixed(1) + "%";
    document.getElementById('amountDue').innerHTML = dollar(amountDue);
    //document.getElementById('outputTable').style.display="table";
    //document.getElementById('outputTable2').style.display="table";
    $('.outputTable').css('display','block');
    //document.getElementById('outputTable').style.visibility="visible";
    //document.getElementById('outputTable2').style.visibility="visible";
    
}

function calcTax(taxableIncome, typeCode) {
    // Income Bracket Margins
    var inc = [
        [9275, 37650, 91150, 190150, 413350, 415050],
        [18550, 75300, 151900, 231450, 413350, 466950],
        [9275, 37650, 75950, 115725, 206675, 233475],
        [13250, 50400, 130150, 210800, 413350, 441000]
    ];

    var a0 = inc[typeCode][0], a1 = inc[typeCode][1], a2 = inc[typeCode][2], a3 = inc[typeCode][3], a4 = inc[typeCode][4], a5 = inc[typeCode][5];
    var r0 = .10, r1 = .15, r2 = .25, r3 = .28, r4 = .33, r5 = .35, r6 = .396; // marginal tax rates
    
    var temp = 1.0 * taxableIncome;
    var taxExpense = 0.0;
    
    
    // Calculate Total Tax Expense
    // Method X** (less clear, less repetitive)
    /*
    {
        if(temp>a5) {
            taxExpense += r6*(temp - a5);
            temp = a5;
        }
        if(temp>a4) {
            taxExpense += r5*(temp - a4);
            temp = a4;
        }
        if(temp>a3) {
            taxExpense += r4*(temp - a3);
            temp = a3;
        }
        if(temp>a2) {
            taxExpense += r3*(temp - a2);
            temp = a2;
        }
        if(temp>a1) {
            taxExpense += r2*(temp - a1);
            temp = a1;
        }
        if(temp>a0) {
            taxExpense += r1*(temp - a0);
            temp = a0;
        }
        taxExpense += r0*temp;
        temp = 0;
    }*/
    
    // Calculate Total Tax Expense
    // Method Y** (more clear, more intuitive)
    {
        if(temp<=a0){
            bracket = 0;
            taxExpense = r0*temp;}
        else if(temp<=a1){
            bracket = 1;
            taxExpense = r1*(temp-a0) + r0*(a0-0);}
        else if(temp<=a2){
            bracket = 2;
            taxExpense = r2*(temp-a1) + r1*(a1-a0) + r0*(a0-0);}
        else if(temp<=a3){
            bracket = 3;
            taxExpense = r3*(temp-a2) + r2*(a2-a1) + r1*(a1-a0) + r0*(a0-0);}
        else if(temp<=a4){
            bracket = 4;
            taxExpense = r4*(temp-a3) + r3*(a3-a2) + r2*(a2-a1) + r1*(a1-a0) + r0*(a0-0);}
        else if(temp<=a5){
            bracket = 5;
            taxExpense = r5*(temp-a4) + r4*(a4-a3) + r3*(a3-a2) + r2*(a2-a1) + r1*(a1-a0) + r0*(a0-0);}
        else {
            bracket = 6;
            taxExpense = r6*(temp-a5) + r5*(a5-a4) + r4*(a4-a3) + r3*(a3-a2) + r2*(a2-a1) + r1*(a1-a0) + r0*(a0-0);}
    }
    
    return taxExpense;
}

