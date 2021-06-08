let borrowersName = `John Doe`
let accountNo = `123456`
let loanAmount = 240000
let downPay = 60000
let terms = 360
let interest = .038
let intrate = interest / 12
let monthlyPay = (loanAmount * intrate * (Math.pow(1+intrate, terms)) / (Math.pow(1+intrate,terms) -1))
monthlyPay = monthlyPay.toFixed(2)
let total = monthlyPay * terms
total = total.toFixed(2)


console.log(`Borrower's Name: ` + borrowersName)
console.log(`Monthly Payment: $` + monthlyPay)
console.log(`Total Cost of House: $` + total)