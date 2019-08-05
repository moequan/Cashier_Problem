// CASHIER PROBLEM  





//SOLUTION

cashier(3.79, 50);
cashier(13.75, 40);
cashier(1.74, 5);
cashier(10.75, 5);
cashier(33, 50);
cashier(33.12, 44);
cashier(22.13, 44);
function cashier(price,paid){
    let change = parseFloat((paid - price).toFixed(2))
    console.log(`Price: ${price} \nPaid Amount: ${paid} \nChange: ${(change)}`)
    let curr1 = 20;
    if(change >=curr1){
        let amountOfNotes = Math.floor(change / curr1);
        change = change % curr1;
        console.log(`${amountOfNotes} x ${curr1}`)
    }
    let curr2 = 10;
    if(change >=curr2){
        let amountOfNotes = Math.floor(change / curr2);
        change = change % curr2;
        console.log(`${amountOfNotes} x ${curr2}`)
    }
    let curr3 = 5;
    if(change >=curr3){
        let amountOfNotes = Math.floor(change / curr3);
        change = change % curr3;
        console.log(`${amountOfNotes} x ${curr3}`)
    }
    let curr4 = 2;
    if(change >=curr4){
        let amountOfNotes = Math.floor(change / curr4);
        change = change % curr4;
        console.log(`${amountOfNotes} x ${curr4}`)
    }
    let curr5 = 1;
    if(change >=curr5){
        let amountOfNotes = Math.floor(change / curr5);
        change = change % curr5;
        console.log(`${amountOfNotes} x ${curr5}`)
    }
    let curr6 = 0.5;
    if(change >=curr6){
        let amountOfNotes = Math.floor(change / curr6);
        change = change % curr6;
        console.log(`${amountOfNotes} x ${curr6}`)
    }
    let curr7 = 0.2;
    if(change >=curr7){
        let amountOfNotes = Math.floor(change / curr7);
        change = change % curr7;
        console.log(`${amountOfNotes} x ${curr7}`)
    }
    let curr8 = 0.1;
    if(change >=curr8){
        let amountOfNotes = Math.floor(change / curr8);
        change = change % curr8;
        console.log(`${amountOfNotes} x ${curr8}`)
    }
    let curr9 = 0.05;
    if(change >=curr9){
        let amountOfNotes = Math.floor(change / curr9);
        change = change % curr9;
        console.log(`${amountOfNotes} x ${curr9}`)
    }
    console.log(`-------------------------------------`)
}



//SOLVING WITH FUNCTIONS




