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

function addNewIncome(description, amount){
    incomesTotal += Number(amount.value);
    incomesTotalDiv.children[1].textContent = formatValue(incomesTotal).replace('$', '');
    balance += Number(amount.value);
    drawBalance(balance);
    let newIncome = {description: description.value, amount: amount.value};
    incomes.push(newIncome);
    allPercentages(incomesTotal, expensesTotal, expenses);
    drawIncomes(incomes);
}

function addNewExpense(description, amount){
    expensesTotal += Number(amount.value);
    amountWrap.textContent = formatValue(expensesTotal).replace('+$', '-'); 
    balance -= Number(amount.value);
    drawBalance(balance);
    let newExpence = {description: description.value, amount: amount.value};
    expenses.push(newExpence);
    allPercentages(incomesTotal, expensesTotal, expenses);
    drawExpenses(expenses);
}


export { isValid, addNewIncome, addNewExpense };