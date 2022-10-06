'use strict';
 
// console.log(document.querySelector('.message'));

// document.querySelector('.message').textContent = "Galat Jawab...";

const random = Math.trunc((Math.random() * 20) + 1);
document.querySelector('.number').textContent = random;

document.querySelector('.check').addEventListener(
    'click', function(){
       const guess = Number(document.querySelector('.guess').value);
        // console.log(typeof guess, guess);
        if(!guess){
            document.querySelector('.message').textContent = "🚫 Type a Number before Checking !"
        }
        else if(guess === random){
            document.querySelector('.message').textContent = "🎉 Correct Answer"
        }
        else{
            document.querySelector('.message').textContent = "Wrong Answer !"
        }
    });

          