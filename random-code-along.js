const multiplier = 100

function rand(word){

    const decimal = Math.random()
    const time10 = decimal * multiplier;
    const final = Math.floor(time10);
    return final + word; 
}


console.log(rand("times"));