function cenaPoCm(r, cena){
    let povrsina = r*r*Math.PI; 
    return cena / povrsina;
}

console.log(cenaPoCm(10, 100));