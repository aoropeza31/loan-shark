//get values
function HelloWorld(){
    //get loan amount value
    let loanAmount = document.getElementById("loanAmount").value;
    //get the total amount of months value
    let termMonths = document.getElementById("term").value;
    //get interest rate value
    let interestRate = document.getElementById("interestRate").value;
    //call calcution functions

    let principal = parseFloat(loanAmount);
    let terms = parseInt(termMonths);
    let interest = parseFloat(interestRate);

    if(Number.isInteger(principal)&& Number.isInteger(terms) && Number.isInteger(interest)){
        let monthlyPayment = monthlyPaymentsCalc(principal, interest, terms);
        let totalCostOfLoan = totalCostOfLoanCalc(monthlyPayment, terms);
        let totalInterest = totalInterestCalc(principal, totalCostOfLoan);

        displayLoanDetails(monthlyPayment,principle, totalCostOfLoan, totalInterest);
        displayLoanTable
    }
}

//function to calculate total monthly payments
function monthlyPaymentsCalc(){

}
//function to calculate principal paid this month
function totalPrincipalCalc(){

}
//function to calculate interest paid this month
function totalInterestCalc() {

}

//function to calculate total cost of loan
function totalCostOfLoan(){

}

//function that displays results
function displayLoanDetails(){

}
//function that displays results
function displayLoanTable(){

}


