
    function nadjiMax(x, y, z){
        let max;
        if(x > y){
            max = x;
        }else if(y > x){
            max = y;
        }
        if(z > max){
            max = z;
        }

        return max;
    }
    console.log(nadjiMax(9, -3, 1));

// ili

    function nadjiMaksimum(x, y, z){
        let max = x;
        let brojevi = [x, y, z];
        brojevi.forEach(element => {
            if(element > max){
                max = element;
            }
        });
        return max;
    }
    console.log(nadjiMaksimum(10, 123, -12));

