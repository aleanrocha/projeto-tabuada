// Seleções de elementos

const form = document.querySelector("#multiplication-form")
const number = document.querySelector("#number")
const multiplicator = document.querySelector("#multiplicator")

// Funções

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const multiplicationNumber = +number.value
  const multiplicatorNumber = +multiplicator.value
  if(!multiplicationNumber || !multiplicatorNumber)
    alert("Preencha todos os campos!")

  console.log(multiplicationNumber, multiplicatorNumber)
})

// Eventos