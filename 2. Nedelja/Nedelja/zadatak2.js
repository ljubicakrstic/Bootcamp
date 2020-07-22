

{
    let a = 1;
    let brojevi = [];
    while(a <= 100){
        if(a % 15 == 0){
            brojevi.push("FizzBuzz");
        }else if(a % 3 == 0){
            brojevi.push("Fizz");
        }else if(a % 5 == 0){
            brojevi.push("Buzz");
        }else{
            brojevi.push(a);
        }
        a++;
    }
    console.log(brojevi);
}