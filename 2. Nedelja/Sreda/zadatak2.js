//PRODAVNICA

{
    let cena = 20;
    let stanje = 40;

    if(cena < 0){
        console.log("Cena ne moze biti negativna.")
    }else if(cena <= stanje){
        novoStanje = stanje - cena;
        console.log("Uspesno ste kupili proizvod. Novo stanje:", novoStanje);
    }else{
        console.log("Nemate dovoljno novca. Stanje:", stanje);
    }
}

