// First, tell us your name
let yourName = "Jevan Godoy" // HINT: Replace this with your own name!

// selecting the element with an id of credit
const credit = document.querySelector('#credit')

// Code to update name display
credit.textContent = `Created by ${yourName}`

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

// Selecting the element with an id of add/minus
const gbPlusBtn = document.querySelector('#add-gb') // Gingerbread +
const gbMinusBtn = document.querySelector('#minus-gb') // Gingerbread -

const ccPlusBtn = document.querySelector('#add-cc') // Chocolate Chip +
const ccMinusBtn = document.querySelector('#minus-cc') // Chocolate Chip -

const sugarPlusBtn = document.querySelector('#add-sugar') // Sugar Sprinkle +
const sugarMinusBtn = document.querySelector('#minus-sugar') // Sugar Sprinkle -

// rest button element id
const resetBtn = document.querySelector('#reset')

// Selecting the element with an id of total quanity of items
const gbTotal = document.querySelector('#qty-gb') // Gingerbread
const ccTotal = document.querySelector('#qty-cc') // Chocolate Chip
const sugarTotal = document.querySelector('#qty-sugar') // Sugar Sprinkle
const Total = document.querySelector('#qty-total') // Total

// Gingerbread + 1
gbPlusBtn.addEventListener('click', function(){
    gb = gb + 1
    gbTotal.innerHTML = (gb)
    Total.innerHTML = (gb + cc + sugar)
    console.log('Gingerbread '+gb)
})

// Gingerbread - 1
gbMinusBtn.addEventListener('click', function(e){
    if (gb > 0) {
        gb = gb - 1
    }
    gbTotal.innerHTML = (gb)
    Total.innerHTML = (gb + cc + sugar)
    console.log('Gingerbread '+gb)
})

// Chocolate Chip + 1
ccPlusBtn.addEventListener('click', function(){
    cc = cc + 1
    ccTotal.innerHTML = (cc)
    Total.innerHTML = (gb + cc + sugar)
    console.log('Chocolate Chip '+cc)
})

// Chocolate Chip - 1
ccMinusBtn.addEventListener('click', function(e){
    if (cc > 0) {
        cc = cc - 1
    }
    ccTotal.innerHTML = (cc)
    Total.innerHTML = (gb + cc + sugar)
    console.log('Chocolate Chip '+cc)
})

// Sugar Sprinkle + 1
sugarPlusBtn.addEventListener('click', function(){
    sugar = sugar + 1
    sugarTotal.innerHTML = (sugar)
    Total.innerHTML = (gb + cc + sugar)
    console.log('Sugar Sprinkle '+sugar)
})

// Sugar Sprinkle - 1
sugarMinusBtn.addEventListener('click', function(e){
    if (sugar > 0) {
        sugar = sugar - 1
    }
    sugarTotal.innerHTML = (sugar)
    Total.innerHTML = (gb + cc + sugar)
    console.log('Sugar Sprinkle '+sugar)
})

// Reset 
resetBtn.addEventListener('click', function(){
    gb = gb - gb
    cc = cc - cc
    sugar = sugar - sugar
    gbTotal.innerHTML = (gb)
    ccTotal.innerHTML = (cc)
    sugarTotal.innerHTML = (sugar)
    Total.innerHTML = (gb + cc + sugar)
    console.log("reset")
})