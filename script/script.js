let addBtn = document.getElementById("addBtn")
let submitBtn = document.getElementById("submitBtn")
let foods = []
i = 0

function newFood(food, amount){
    return {food, amount}
}

addBtn.addEventListener('click', ()=>{
    // Buscando Variaveis do html
    let input = document.getElementById("inputContainer")
    let foodName = document.getElementById("foodName")
    let foodAmount = document.getElementById("foodAmount")
    let food = foodName.value
    let amount = foodAmount.value

    if(foodName.value == "" || foodAmount.value == "")
        return

    foods[i] = newFood(food, amount)
    
    let listInput = document.createElement("p")
    listInput.innerHTML = foods[i].food + " : " + foods[i].amount
    input.appendChild(listInput)
    
    foodName.value = ""
    foodAmount.value = ""

    i++
})

submitBtn.addEventListener('click', ()=>{
    let output = document.getElementById("outputContainer")
    let mathInput = document.getElementById("selectInput")
    let math = mathInput.value
    let numInput = document.getElementById("selectNumber")
    let num = parseInt(numInput.value)




    for (let j = 0; j<foods.length; j++){
        let outputList = document.createElement("p")
        let amount = parseFloat(foods[j].amount)

        if(math == "x"){
            result = amount * num
        }else{
            result = amount / num
        }


        outputList.innerText = foods[j].food + " : " + result
        output.appendChild(outputList)
    }
})