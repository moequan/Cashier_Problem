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

function cashier(paid, price) {
    cashBack = paid - price;
    console.log(`Price: ${price}`)
    console.log(`Paid amount: ${paid}`)
    console.log(`Change: ${cashBack}`)
    if (cashBack > 20) {
        newResult = cashBack % 20
        noteNumber = (cashBack - newResult) / 20
        console.log(`${noteNumber} x 20€`)
    }

    if (newResult >= 10) {
        newResult = newResult % 10
        noteNumber = (noteNumber - newResult) / 10
        console.log(`${noteNumber} x 10€`)
    }
    if (newResult >= 5) {
        newResult = newResult % 5
        noteNumber = (noteNumber - newResult) / 5
        newResult = Math.floor(newResult)
        console.log(`${newResult} x 5€`)
    }
    if (newResult >= 2) {
        newResult = newResult % 5
        noteNumber = (newResult-noteNumber) / 2
        console.log(`${noteNumber} x 2€`)
    }
    if (newResult >= 1) {
        noteNumber = (newResult-noteNumber) / 1
        newResult = newResult % 1
        noteNumber = Math.floor(noteNumber)      
        console.log(`${noteNumber} x 1€`)
    }
    if (newResult >= 0.5) {
        newResult = newResult % 0.5
        noteNumber = (noteNumber - newResult) / 0.5
        noteNumber = Math.floor(noteNumber)      
        console.log(`${noteNumber} x 0.5€`)
    }

    // if (newResult >= ) {
    //     newResult = newResult % 1
    //     noteNumber = (noteNumber - newResult) / 1
          
    //     console.log(`${noteNumber} x 1€`)
    // }
}

cashier(40, 13.75)