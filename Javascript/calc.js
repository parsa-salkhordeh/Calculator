// Select DOM Elements
let input=document.getElementById('result'); //Input field 
let buttons=document.querySelectorAll('button'); //All buttons(operator and general buttons)
let clearbtn=document.querySelector('.clear-btn');//backspace clear button
let history=document.getElementById('history-icon');//lastresult line 20-23 and 38

// Handle Calculator Button Events
buttons.forEach(btn => {
    btn.addEventListener('click', function() {

        let value = btn.textContent;  // Get button text

        // Clear all input
        if(value === 'C') {
            input.value = "";
        }

        // Perform mathematical operations and save them +(line 38).
       else if(value === '=') {
            let result = eval(input.value);
            input.value = result;
            localStorage.setItem("lastresult", result);
        }

        else {
           input.value += value;
        }
       
    });
});

// clear single Button
clearbtn.addEventListener('click' , function(){
   input.value = input.value.slice(0,-1);
}) 

// History icon
history.addEventListener('click' , function(){
    const last = localStorage.getItem("lastresult");
    input.value = last;
})


