import { showTotalPer, drawExpenses } from "./DOM";

function calculatePercentage(amount, incomesTotal){
    let fullPercentage = (amount / incomesTotal) * 100;
    return Math.round(fullPercentage * 10) / 10;
}

function addPercentageToExpence(expense, percentage){
    if(percentage == Infinity){
        expense.percentage = 0;
    }else{
    expense.percentage = percentage;
    }
}

function percentageTotal(incomesTotal, expensesTotal){
    let percentage = calculatePercentage(expensesTotal, incomesTotal)
    if(expensesTotal == 0){
        percentage = "";
    }else if(percentage == Infinity){
        percentage = 0;
    }
    showTotalPer(percentage);
   
}

function percentagePerExpence(incomesTotal, expenses){
    expenses.forEach(expense => {
        let percentage = calculatePercentage(expense.amount, incomesTotal);
        addPercentageToExpence(expense, percentage);
        drawExpenses(expenses);    
    });
}

function allPercentages(incomesTotal, expensesTotal, expenses){
    percentageTotal(incomesTotal, expensesTotal);
    percentagePerExpence(incomesTotal, expenses);
}

export { allPercentages };