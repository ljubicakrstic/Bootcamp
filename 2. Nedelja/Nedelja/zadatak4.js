//Za N = 5; 
//     #
//    ##
//   ###
//  ####
// ##### 

{
   let N = 5;
   var i = 1;
   while(i <= 5){
       let red = "";
        red += " ".repeat(N - i) + "#".repeat(i);
       console.log(red);
       i++;  
   }
}