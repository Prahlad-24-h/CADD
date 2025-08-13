let balance = 0;
let loanApplied = false;
let accountNumber = '';

function deposit() {
  const amount = parseFloat(document.getElementById("amount").value);
  if (!isNaN(amount) && amount > 0) {
    balance += amount;
    updateBalance();
    alert(`₹${amount} deposited successfully!`);
  } else {
    alert("Please enter a valid amount.");
  }
}

function withdraw() {
  const amount = parseFloat(document.getElementById("amount").value);
  if (!isNaN(amount) && amount > 0) {
    if (amount <= balance) {
      balance -= amount;
      updateBalance();
      alert(`₹${amount} withdrawn successfully!`);
    } else {
      alert("Insufficient balance!");
    }
  } else {
    alert("Please enter a valid amount.");
  }
}

function applyLoan() {
  const loanAmount = parseFloat(document.getElementById("loanAmount").value);
  if (!isNaN(loanAmount) && loanAmount > 0) {
    loanApplied = true;
    document.getElementById("loanStatus").textContent = "Loan Status: Applied for ₹" + loanAmount;
    alert(`Loan of ₹${loanAmount} applied successfully!`);
  } else {
    alert("Please enter a valid loan amount.");
  }
}

function updateBalance() {
  document.getElementById("balance").textContent = balance.toFixed(2);
  document.getElementById("balanceSummary").textContent = balance.toFixed(2);
}

function closeAccount() {
  balance = 0;
  loanApplied = false;
  document.getElementById("closeStatus").textContent = "Your account has been successfully closed.";
  alert("Account closed successfully!");
}

function setAccountNumber() {
  accountNumber = document.getElementById("accountNumber").value;
  document.getElementById("accountNumberSummary").textContent = accountNumber;
}

setAccountNumber();
