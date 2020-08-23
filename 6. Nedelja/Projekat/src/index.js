import { isValid, addNewIncome, addNewExpense } from "./balance.js";
import { removeErrors } from "./DOM.js";

const form = document.getElementById("form");
const type = document.getElementById("type");
const description = document.getElementById("desc");
const amount = document.getElementById("amount");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(isValid(type, description, amount)){
        removeErrors();
        if(type.value == "in"){
            addNewIncome(description, amount);
        }else if(type.value  == "out"){
            addNewExpense(description, amount);
        }
    }
});

