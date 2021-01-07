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
  } else {

    // use parseFloat to convert string to number: if loanAmt = '100' (string) --> parseFloat(loanAmt) = 100 (number)
    calculate(parseFloat(loanAmt), parseInt(months), parseFloat(rate), parseFloat(extra));
  }
};

function calculate(loanAmt, months, rate, extra) {
  i = rate/100; //change % to decimal

  var monthlyPayment = loanAmt*(i/12)*Math.pow((1+i/12),months) / (Math.pow((1+i/12),months)-1);

  var info = "";

  info += "<table width='250'>";
  info += "<tr><td>Loan Amount:</td>";
  info += "<td align='right'>$" + loanAmt + "</td></tr>";

  info += "<tr><td>Num of Months:</td>";
  info += "<td align='right'>" + months + "</td></tr>";

  info += "<tr><td>Interest Rate:</td>";
  info += "<td align='right'>" + rate + "%</td></tr>";
  
  info += "<tr><td>Monthly Payment:</td>";
  info += "<td align='right'>$" + round(monthlyPayment, 2) + "</td></tr>";

  info += "<tr><td>+Extra:</td>";
  info += "<td align='right'>$" + extra + "</td></tr>";

  info += "<tr><td>Total Payment:</td>";
  info += "<td align='right'>$" + round(monthlyPayment + extra, 2) + "</td></tr>";

  info += "</table>";

  // alert(round(monthlyPayment, 2));

  document.getElementById('loan-info').innerHTML = info; //info is a string containing all the html table code

  // calculate figures for table
  var table = '';

  table += "<table cellpadding='15' border='1'>";
  table += "<tr>";
    table += "<td width='60'>0</td>";
    table += "<td width='80'>&nbsp;</td>";
    table += "<td width='80'>&nbsp;</td>";
    table += "<td width='60'>&nbsp;</td>";
    table += "<td width='85'>&nbsp;</td>";
    table += "<td width='90'>" + round(loanAmt,2) + "</td>"; // round loan amount to 2 decimals
  table += "</tr>";

  var currentBalance = loanAmt;
  var paymentCounter = 1;
  var totalInterest = 0;

  monthlyPayment = monthlyPayment + extra;

  while(currentBalance > 0) {
    // create rows
    towardsInterest = (i/12) * currentBalance; // calculates portion of monthly pmt that goes toward interest
    
    if(monthlyPayment > currentBalance) {
      monthlyPayment = currentBalance + towardsInterest;
    }

    towardsBalance = monthlyPayment - towardsInterest;
    totalInterest = totalInterest + towardsInterest; // total int equals previous total int plus whatever is going toward int in the current payment
    currentBalance = currentBalance - towardsBalance;

    // display row

    table += "<tr>";
      table += "<td>" + paymentCounter + "</td>";
      table += "<td>" + round(monthlyPayment,2) + "</td>";
      table += "<td>" + round(towardsBalance,2) + "</td>";
      table += "<td>" + round(towardsInterest,2) + "</td>";
      table += "<td>" + round(totalInterest,2) + "</td>";
      table += "<td>" + round(currentBalance,2) + "</td>";
    table += "</tr>";



    paymentCounter++;

  }


    table += "</table>";

    document.getElementById('table').innerHTML = table;
}

function round(num, dec) {
  return (Math.round(num*Math.pow(10,dec))/Math.pow(10,dec)).toFixed(dec);
}