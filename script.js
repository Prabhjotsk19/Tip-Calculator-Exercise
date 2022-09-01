const billInput = document.getElementById('billTotalInput')
const tip = document.getElementById('tipInput')
const people = document.getElementById('numberOfPeople')
const perPerson = document.getElementById('perPersonTotal')

let numberOfPeople = Number(people.innerText)

// ** Calculate the total bill per person **
const calculateBill = () => {
  const bill = Number(billInput.value)

  const tipPercent = Number(tip.value) / 100

  const tipAmount = bill * tipPercent

  const total = bill + tipAmount 

  const perPersonAmount = total / numberOfPeople

  perPerson.innerText = `$${perPersonAmount.toFixed(2)}`
  
}

// ** Split the bill between more people **
const increasePeople = () => {
  numberOfPeople += 1

  people.innerText = numberOfPeople

  calculateBill()
}


// ** Split the bill between fewer persons **
const decreasePeople = () => {

  if (numberOfPeople <= 1) {
    return 
  }
  
  numberOfPeople -= 1

  people.innerText = numberOfPeople

  calculateBill()
}