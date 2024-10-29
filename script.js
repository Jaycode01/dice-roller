// Lets go...
/* 
Codes by 
Jaycode in the process 
of mastering JavaScript
*/

function roller(){

    const numOfDice = document.getElementById('numOfDice').value;
    const diceResult = document.getElementById('diceResult');
    const diceImages = document.getElementById('diceImages');
    values = [];
    images = [];

    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.png" alt="dice ${value}">`)
    }

    diceResult.textContent = `dice: ${values.join(', ')}` 
    diceImages.innerHTML = images.join(' ')
}