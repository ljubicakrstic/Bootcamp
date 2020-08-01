function divisibleByFive(arr){
     console.log(arr.filter(num => num % 5 == 0));
}

divisibleByFive([1,2,3,4,5,10,15,23,1,5]) // Исписује -> 5,10,15,5