function getThreeDigit(){
    const pin = Math.floor(Math.random() * 10000)
    const pinString = pin + ''
    if(pinString.length == 4){
        return pin
    }
    else{
        return getThreeDigit()
    }
}

function generatePin(){
    const pin = getThreeDigit()
    document.getElementById('generate-input').value = pin
}

document.getElementById('keys').addEventListener('click', function(event){
    const number  = event.target.innerText
    const keysInput = document.getElementById('keys-input')
    if(isNaN(number)){
        if(number == 'C'){
            keysInput.value = ''
        }
    }
    else{
        const preValue = keysInput.value
        const newValue = preValue + number
        keysInput.value = newValue
    }
})

function varifyPin(){
    const generatedPin =  document.getElementById('generate-input').value
    const givenPin =  document.getElementById('keys-input').value
    if(generatedPin == givenPin){
        document.getElementById('notify-success').style.display ='block'
        document.getElementById('notify-failed').style.display = 'none'
    }
    else{
        document.getElementById('notify-failed').style.display = 'block'
        document.getElementById('notify-success').style.display = 'none'
    }
}