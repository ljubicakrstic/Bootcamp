

{
    let a = 1;
    let odgovor = "";
    while(a <= 100){
        if(a % 3 == 0){
            odgovor += "Fizz";
        }
        if(a % 5 == 0){
            odgovor += "Buzz";
        }
        odgovor += a;
        a++;
    }
    console.log(odgovor);
}