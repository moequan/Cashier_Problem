// CASHIER PROBLEM  

// ```cashier(3.75, 50)
// "Price: 3.75€, Paid amount: 50€, Change: 46.25€
// 2 x 20€
// 1 x 5€
// 1 x 1€
// 1 x 0.2€
// 1 x 0.05€
// "```
// ```We check for 20/10/5/2/1/0.50/0.20/0.10/0.05/0.02/0.01```

// VARIABLES


//NOTES

let twenty = 20;
ten = 10;
five = 5;
two = 2;
one = 1;
fifty = 0.5;
twenty = 0.2;
ten = 0.1;
fiveCent = 0.05;

//CASHVARIABLES

let price;
let paid;
let newResult;
let noteNumber;
let cashBack;

//CALCULATE CHANGE  

// function cashier(paid, price) {
//     cashBack = paid - price;
//     console.log(`Price: ${price}`)
//     console.log(`Paid amount: ${paid}`)
//     console.log(`Change: ${cashBack}`)
//     if (cashBack > 20) {
//         newResult = cashBack % 20
//         noteNumber = (cashBack - newResult) / 20
//         console.log(`${noteNumber} x 20€`)
//     }

//     if (newResult >= 10) {
//         newResult = newResult % 10
//         noteNumber = (noteNumber - newResult) / 10
//         console.log(`${noteNumber} x 10€`)
//     }
//     if (newResult >= 5) {
//         newResult = newResult % 5
//         noteNumber = (noteNumber - newResult) / 5
//         newResult = Math.floor(newResult)
//         console.log(`${newResult} x 5€`)
//     }
//     if (newResult >= 2) {
//         newResult = newResult % 2
//         noteNumber = (newResult-noteNumber) / 2
//         console.log(`${noteNumber} x 2€`)
//     }
//     if (newResult >= 1) {
//         noteNumber = (newResult-noteNumber) / 1
//         newResult = newResult % 1
//         noteNumber = Math.floor(noteNumber)      
//         console.log(`${noteNumber} x 1€`)
//     }
//     if (newResult >= 0.5) {
//         newResult = newResult % 0.5
//         noteNumber = (noteNumber - newResult) / 0.5
//         noteNumber = Math.floor(noteNumber)      
//         console.log(`${noteNumber} x 0.5€`)
//     }
//     if (newResult >= 0.2) {
//         newResult = newResult % 0.2
//         noteNumber = (noteNumber - newResult) / 0.2
//         noteNumber = Math.floor(noteNumber)      
//         console.log(`${noteNumber} x 0.2€`)
//     }

//     // if (newResult >= ) {
//     //     newResult = newResult % 1
//     //     noteNumber = (noteNumber - newResult) / 1
          
//     //     console.log(`${noteNumber} x 1€`)
//     // }
// }

// cashier(40, 13.75)



//OTHER SOLUTION

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



