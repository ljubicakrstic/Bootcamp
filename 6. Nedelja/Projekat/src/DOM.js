const errTypePar = document.getElementById("errType");
const errDescPar = document.getElementById("errDesc");
const errAmountPar = document.getElementById("errAmount");
const incomesTable = document.getElementById("incomes-table");
const expensesTable = document.getElementById("expenses-table");
const balanceSpan = document.getElementById("balance");
const percentageWrap = document.querySelector(".percentage-wrap");

let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    signDisplay: 'exceptZero'
  });

  function formatValue(value){
      return formatter.format(value);
  }


function showErrors(errType, errDesc, errAmount){
    errTypePar.textContent = errType;
    errDescPar.textContent = errDesc;
    errAmountPar.textContent = errAmount;
}

function removeErrors(){
    Array.from(document.querySelectorAll(".errorMsg")).forEach(element => {
        element.textContent = "";
    });
}

function drawIncomes(incomes){
    incomesTable.children[1].innerHTML = "";
    incomes.forEach(el => {
        const tableRow = document.createElement("tr");
        const incomeDesc = document.createElement("td");
        incomeDesc.textContent = el.description;
        const incomeAmount = document.createElement("td");
        incomeAmount.className = "text-right income-blue";
        incomeAmount.textContent = formatValue(el.amount).replace('$', '');
        tableRow.append(incomeDesc, incomeAmount);
        incomesTable.children[1].appendChild(tableRow);
    });  
}

function drawExpenses(expenses){
    expensesTable.children[1].innerHTML = "";
    expenses.forEach(el => {
        const tableRow = document.createElement("tr");
        const expenseDesc = document.createElement("td");
        expenseDesc.textContent = el.description;
        const expenseAmount = document.createElement("td");
        expenseAmount.className = "text-right expense-red";
        expenseAmount.textContent = formatValue(el.amount).replace('+$', '-'); 
        const percentageSpan = document.createElement("span");
        percentageSpan.className = "percentage-per-expence";
        percentageSpan.textContent = el.percentage + "%";
        expenseAmount.appendChild(percentageSpan);
        tableRow.append(expenseDesc, expenseAmount);
        expensesTable.children[1].appendChild(tableRow);
    }); 
}

function drawBalance(balance){
    balanceSpan.textContent = formatter.format(balance).replace('$', '');
}

function showTotalPer(totalPer){
    percentageWrap.textContent = "";
    percentageWrap.innerHTML = `<span class="text-padding">${totalPer}%</span>`;
}

export { showErrors, removeErrors, drawExpenses, showTotalPer, drawIncomes, drawBalance, formatValue };