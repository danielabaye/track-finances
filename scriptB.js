const budgetForm = document.getElementById("budget-form");
const monthlyExpenseForm = document.getElementById("monthly-expense-form");
const monthlySummarySection = document.getElementById("monthly-summary");

let remainingBudget = 0;
let monthlyExpenses = 0;

budgetForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const budgetAmount = parseFloat(budgetForm.querySelector("#budget-amount").value);
    remainingBudget += budgetAmount;
    updateMonthlySummary();
    budgetForm.reset();
});

monthlyExpenseForm.addEventListener("submit", (e) => { 
    e.preventDefault();
    const monthlyExpenseAmount = parseFloat(monthlyExpenseForm.querySelector("#monthly-expense-amount").value);
    monthlyExpenses += monthlyExpenseAmount;
    updateMonthlySummary();
    monthlyExpenseForm.reset();
});

function updateMonthlySummary(){
    monthlySummarySection.innerHTML = `
    <p>Total Expenses: $${monthlyExpenses.toFixed(2)}</p>
    <p>Remaining Budget: $${(remainingBudget - monthlyExpenses).toFixed(2)}</p>
    `;
}
