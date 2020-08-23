import { showErrors, drawIncomes, drawExpenses, drawBalance, formatValue } from "./DOM.js";
import { allPercentages } from "./percentages.js";

let incomes = [];
let expenses = [];
let balance = 0;
let incomesTotal = 0;
let expensesTotal = 0;

const incomesTotalDiv = document.querySelector(".incomes-total");
const amountWrap = document.querySelector(".amount-wrap");


function isValid(type, description, amount){
    let errType = "";
    let errDesc = "";
    let errAmount = "";
    if(type.options[type.selectedIndex].value == ""){
        errType = "Morate odabrati tip transakcije";
    }
    if(description.value.trim() == ""){
        errDesc  = "Morate uneti opis transakcije";
    }
    if(amount.value <= 0){
        errAmount = "Iznos mora biti veci od nule";
    }
    if(errType !== "" || errDesc !== "" || errAmount !== ""){
        showErrors(errType, errDesc, errAmount);
        return false;
    }else{
        return true;
    }
}

let idInc = 0;
function addNewIncome(description, amount){
    incomesTotal += Number(amount.value);
    idInc++;
    incomesTotalDiv.children[1].textContent = formatValue(incomesTotal).replace('$', '');
    balance += Number(amount.value);
    drawBalance(balance);
    let newIncome = {description: description.value, amount: amount.value, id: idInc};
    incomes.push(newIncome);
    allPercentages(incomesTotal, expensesTotal, expenses);
    drawIncomes(incomes);
}

function removeIncome(incomes, id){
    let removed = incomes.splice(incomes.findIndex(element => element.id == id), 1);
    incomesTotal -= Number(removed[0].amount);
    incomesTotalDiv.children[1].textContent = formatValue(incomesTotal).replace('$', '');
    balance -= Number(removed[0].amount);
    drawBalance(balance);
    allPercentages(incomesTotal, expensesTotal, expenses);
    drawIncomes(incomes);

}

let idExp = 0;
function addNewExpense(description, amount){
    expensesTotal += Number(amount.value);
    idExp++;
    amountWrap.textContent = formatValue(expensesTotal).replace('+$', '-'); 
    balance -= Number(amount.value);
    drawBalance(balance);
    let newExpence = {description: description.value, amount: amount.value, id: idExp};
    expenses.push(newExpence);
    allPercentages(incomesTotal, expensesTotal, expenses);
    drawExpenses(expenses);
}

function removeExpense(expenses, id){
    let removed = expenses.splice(expenses.findIndex(element => element.id == id), 1);
    expensesTotal -= Number(removed[0].amount);
    amountWrap.textContent = formatValue(expensesTotal).replace('+$', '-'); 
    balance += Number(removed[0].amount);
    drawBalance(balance);
    allPercentages(incomesTotal, expensesTotal, expenses);
    drawExpenses(expenses);
}




export { isValid, addNewIncome, addNewExpense, removeIncome, removeExpense };