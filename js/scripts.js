// Seleções de elementos

const form = document.querySelector("#multiplication-form")
const number = document.querySelector("#number")
const multiplicator = document.querySelector("#multiplicator")
const multiplicationTable = document.querySelector("#multiplication-operations")
const multiplicationTitle = document.querySelector("#multiplication-title span")

// Funções

const createTemplate = (number, multiplicator) => {
  multiplicationTable.innerHTML = ""
  for (let i = 1 ; i <= multiplicator ; i++) {
    const result = number * i
    const template = `
      <div class="row">
        <p class="operation">${number} X ${i} =</p>
        <p class="result">${result}</p>
      </div>
    `
    const parser = new DOMParser()
    const htmlTemplate = parser.parseFromString(template, "text/html")
    const row = htmlTemplate.querySelector(".row")
    multiplicationTable.appendChild(row)
  }
  multiplicationTitle.innerHTML = number
}

// Eventos

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const multiplicationNumber = +number.value
  const multiplicatorNumber = +multiplicator.value
  if(!multiplicationNumber || !multiplicatorNumber)
    alert("Preencha todos os campos!")
  createTemplate(multiplicationNumber, multiplicatorNumber)
})