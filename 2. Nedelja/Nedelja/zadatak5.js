//Za N = 5;
//     # #
//    ## ##
//   ### ###
//  #### ####
// ##### #####

{
    let N = 5;
    let i = 1;

    while(i <= N){
        let red ="";
        red += " ".repeat(N - i) + "#".repeat(i) + " " + "#".repeat(i) + " ".repeat(N - i);
        console.log(red);
        i++;
    }
}