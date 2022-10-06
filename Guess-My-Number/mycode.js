'use strict';

let score = document.querySelector('.score').textContent;
let highscore = 0;
let random = Math.trunc(Math.random() * 20 + 1);


// Event listener for 'Again' button :
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  //Reset the Score to Initial Value :
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  // Reset the random no. :
  random = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = '?'
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.borderRadius = '0';
  document.querySelector('.number').style.width = '15rem';
});

// Event Listener for 'chack' button :
document.querySelector('.check').addEventListener('click', function () 
{
  const guess = Number(document.querySelector('.guess').value);
  // console.log(typeof guess, guess);
 
if(score > 0){
    // When input is empty :
    if (!guess) {
        document.querySelector('.message').textContent =
          '🚫 Type a Number before Checking !';
      } 
    //  When you win ( Correct Answer) :
      else if (guess === random) 
      {
        document.querySelector('.message').textContent = '🎉 Correct Answer!';
        // Display the no. when win instead of ? :
        document.querySelector('.number').textContent = random;
        document.querySelector('body').style.backgroundColor = '#60b347';
        // document.querySelector('.number').style.borderRadius = '100px';
        document.querySelector('.number').style.width = '100%';

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
      } 
      // When guessed no. is higher then the random no. :
      else if (guess > random) {
        document.querySelector('.message').textContent = 'Too High !';
        score--;
        document.querySelector('.score').textContent = score;
        console.log(score);
        // when you ran out of chances :
        if (score < 1) {
          document.querySelector('.message').textContent =
            '💩 YOU LOOSE THE GAME !';
            document.querySelector('body').style.backgroundColor = 'tomato';
            document.querySelector('.number').style.borderRadius = '100px';
            document.querySelector('.number').style.width = '20rem';
        }
      } 
      // When guessed no. is lower then the random no. :
      else if (guess < random) {
        document.querySelector('.message').textContent = 'Too Low !';
        score--;
        document.querySelector('.score').textContent = score;
        // when you ran out of chances :
        if (score < 1) {
          document.querySelector('.message').textContent =
            '💩 YOU LOOSE THE GAME !';
            document.querySelector('body').style.backgroundColor = 'tomato';
            document.querySelector('.number').style.borderRadius = '100px';
            document.querySelector('.number').style.width = '20rem';
        }
     }
}

});



  

