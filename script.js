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
  
}