
//Vars
var advice_id =  document.getElementById("advice_id");
var advice_text =  document.getElementById("advice_text");

// Update display with advice
function updateDisplay(data){
    data = JSON.parse(data)
    advice_id.innerHTML = data.slip.id;
    advice_text.innerHTML = '"'+data.slip.advice+'"';

}

//Fetch new advice and update display
function getAdvice(){
fetch("https://api.adviceslip.com/advice")
.then(x => x.text())
.then(y => updateDisplay(y));
}

// Set default data on first load
getAdvice();