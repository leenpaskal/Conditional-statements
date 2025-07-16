function hotelRoom(mesec, broy){

let priceStudio = 0;
let priceApartment = 0;

if(mesec == "May" || mesec == "October"){

    priceApartment = 65;
  
    if(broy > 7 && broy <= 14){
        priceStudio = 50 * 0.95;
    }else if(broy > 14){
        priceStudio = 50 * 0.7;
    }else{
    priceStudio = 50;
    }

}else if(mesec == "June" || mesec == "September"){

    priceApartment= 68.70;
    
    if(broy > 14){
        priceStudio = 75.20 * 0.8;
    }else{
    priceStudio = 75.20;
    }

}else if(mesec == "July" || mesec == "August"){
    priceStudio = 76;
    priceApartment = 77;
}

if(broy > 14){
    priceApartment *= 0.9;
}

console.log(`Apartment: ${(priceApartment * broy).toFixed(2)} lv.`)
console.log(`Studio: ${(priceStudio * broy).toFixed(2)} lv.`)



}

hotelRoom("May", 15);
