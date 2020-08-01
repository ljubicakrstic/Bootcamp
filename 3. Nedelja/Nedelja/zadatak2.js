function lifeSupply(numPerMonth,age){
   let numPerYear = numPerMonth * 12;
   let agesLeft = 100 - age;
   return numPerYear * agesLeft;
}

lifeSupply(10,26) // Враћа 8880
console.log(lifeSupply(10,26)) // Исписује 8880