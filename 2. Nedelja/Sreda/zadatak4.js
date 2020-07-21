//PRVIH 1.000 DELJIVIH SA 5

//WHILE


{
    let a = 1; 
    let b = 0;
    while(a <= 1000){
        if(b % 5 == 0){
            console.log(b);
            a++;
        }
       b++;
    }
}


//FOR

{
   let a = 0; 
   for(let i = 1; i <= 1000; i++){
        console.log(a);
        a+=5;
   }
}