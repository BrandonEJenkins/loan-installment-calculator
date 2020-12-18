// const loanAmt = document.getElementById('loanAmt').value;
// const months = document.getElementById('months').value;
// const rate = document.getElementById('rate').value;
// const extra = document.getElementById('extra').value;

// function startOver() {
//   loanAmt = '';
//   months = '';
//   rate = '';
//   extra = '0';


// }

function startOver() {
  document.loanForm.loanAmt.value="";
  document.loanForm.months.value="";
  document.loanForm.rate.value="";
  document.loanForm.extra.value="0";

  document.getElementById('loanInfo').innerHTML="";
  document.getElementById('table').innerHTML="";
  
};

function validate() {
  var loanAmt = document.loanForm.loanAmt.value;
  var months = document.loanForm.months.value;
  var rate = document.loanForm.rate.value;
  var extra = document.loanForm.extra.value;

  // how isNaN works: Number(5.5) = 5.5; Number(0) = 0; Number(-1) = -1; Number(monkey) = NaN (not a number)
  
  // if loanAmt, months, rate, extra is/are incorrect, then alert the user to fix the value
  if (loanAmt <= 0 || isNaN(Number(loanAmt)) ) {
    alert('Please enter a valid loan amount');
    document.loanForm.loanAmt.value = '';
  } 
  // how parseInt works: parseInt(5) = 5; parseInt(5.5) = 5; parseInt(0.1) = 0; parseInt(monkey) = NaN
  else if (months <= 0 || parseInt(months) != months) {
    alert('Please enter a valid number of months');
    document.loanForm.months.value = '';
  } 
  else if (rate <= 0 || isNaN(Number(rate)) ) {
    alert('Please enter a valid interest rate');
    document.loanForm.rate.value = '';
  } 
  else if (extra < 0 || isNaN(Number(extra)) ) {
    alert('Please enter a valid extra payment');
    document.loanForm.extra.value = '0';
  } 
  else {
    alert('Validation complete');
    calculate();
  }
};