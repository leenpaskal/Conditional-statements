function operations(n1, n2, operator){

let numbers = 0;

if ((operator === "/" || operator === "%") && n2 === 0) {
        console.log(`Cannot divide ${n1} by zero`);
return; 
}

if(operator === "+") numbers = n1+n2;
else if(operator === "-") numbers = n1 - n2;
else if(operator === "*") numbers = n1 * n2;
else if(operator === "/") numbers = n1 / n2;
else if(operator === "%") numbers = n1 % n2;

if(operator === "+" || operator === "-" || operator === "*"){

    if(numbers%2 === 0){
        console.log(`${n1} ${operator} ${n2} = ${numbers} - even`);
    } else
    console.log(`${n1} ${operator} ${n2} = ${numbers} - odd`);

} else if(operator === "/"){
    console.log(`${n1} ${operator} ${n2} = ${numbers.toFixed(2)}`);
    
} else if(operator === "%"){
    console.log(`${n1} ${operator} ${n2} = ${numbers}`);
} 

}

operations(112,0,"/");
