//red po red;

{
    let a = 1;
    while(a <= 100){
        let odgovor = "";
        if(a % 3 == 0){
            odgovor += "Fizz";
        }
        if(a % 5 == 0){
            odgovor += "Buzz";
        }
         //if(a % 2 == 0){
        //      odgovor += "Puzz";
        //  }
        if(odgovor == ""){
            odgovor += a;
        }
        console.log(odgovor);
        a++;
    }
    
}

//da bude u liniji sa zarezima;

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
        if(a % 3 != 0 && a % 5 != 0){
            odgovor += a;
        }
        if(a !== 100){
        odgovor += ", ";
        }
        a++; 
    }
    console.log(odgovor);
}


