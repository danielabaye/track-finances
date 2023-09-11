const expenseForm = document.getElementById("expense-form");
const incomeForm = document.getElementById("income-form");
const summarySection = document.getElementById("summary");

//Initialize variables for tracking finances
let totalExpenses = 0;
let totalIncome = 0;
let balance = 0;

expenseForm.addEventListener("submit", (e) => { 
    e.preventDefault();
    const expenseAmount = parseFloat(expenseForm.querySelector("#expense-amount").value);
    totalExpenses += expenseAmount;
    balance -= expenseAmount;
    updateSummary();
    expenseForm.reset();
});

incomeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const incomeAmount = parseFloat(incomeForm.querySelector("#income-amount").value);
    totalIncome += incomeAmount;
    balance += incomeAmount;
    updateSummary();
    incomeForm.reset();
});

function updateSummary(){
    summarySection.innerHTML = `
    <p>Total Expenses: $${totalExpenses.toFixed(2)}</p>
    <p>Total Income: $${totalIncome.toFixed(2)}</p>
    <p>Balance: $${balance.toFixed(2)}</p>
    `;
}