import { removeIncome, removeExpense } from "./balance";

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
    signDisplay: 'always'
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
        const deleteTd = document.createElement("td");
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "Obrisi";
        deleteBtn.id = el.id;
        deleteBtn.addEventListener("click", () => {
            removeIncome(incomes, deleteBtn.id);
        });

        const incomeAmount = document.createElement("td");
        incomeAmount.className = "text-right income-blue";
        incomeAmount.textContent = formatValue(el.amount).replace('$', '');
        deleteTd.appendChild(deleteBtn);
        tableRow.append(incomeDesc, deleteTd, incomeAmount);
        tableRow.addEventListener("mouseenter", () => {
            tableRow.children[1].children[0].style.display = "block";
        });
        tableRow.addEventListener("mouseleave", () => {
            tableRow.children[1].children[0].style.display = "none";
        });
        incomesTable.children[1].appendChild(tableRow);
    });  
}

function drawExpenses(expenses){
    expensesTable.children[1].innerHTML = "";
    expenses.forEach(el => {
        const tableRow = document.createElement("tr");
        const expenseDesc = document.createElement("td");
        expenseDesc.textContent = el.description;

        const deleteTdExp = document.createElement("td");
        const deleteBtnExp = document.createElement("button");
        deleteBtnExp.className = "delete-btn";
        deleteBtnExp.textContent = "Obrisi";
        deleteBtnExp.id = el.id;
        deleteBtnExp.addEventListener("click", () => {
            removeExpense(expenses, deleteBtnExp.id);
        });

        const expenseAmount = document.createElement("td");
        expenseAmount.className = "text-right expense-red";
        expenseAmount.textContent = formatValue(el.amount).replace('+$', '-'); 
        const percentageSpan = document.createElement("span");
        percentageSpan.className = "percentage-per-expence";
        percentageSpan.textContent = el.percentage + "%";
        deleteTdExp.appendChild(deleteBtnExp);
        expenseAmount.appendChild(percentageSpan);
        tableRow.append(expenseDesc, deleteTdExp, expenseAmount);
        tableRow.addEventListener("mouseenter", () => {
            tableRow.children[1].children[0].style.display = "block";
        });
        tableRow.addEventListener("mouseleave", () => {
            tableRow.children[1].children[0].style.display = "none";
        });
        expensesTable.children[1].appendChild(tableRow);
    }); 
}

function drawBalance(balance){
    balanceSpan.textContent = formatter.format(balance).replace('$', '');
}

function showTotalPer(totalPer){
    percentageWrap.textContent = "";
    if(totalPer == ""){
        return;
    }else{
    percentageWrap.innerHTML = `<span class="text-padding">${totalPer}%</span>`;
    }
}

export { showErrors, removeErrors, drawExpenses, showTotalPer, drawIncomes, drawBalance, formatValue };