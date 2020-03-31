/*
 GAME RULES:
 - The game has 2 players, playing in rounds
 - In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
 - BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
 - The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
 - The first player to reach 100 points on GLOBAL score wins the game
 */

let scores, roundScore, activePlayer, gamePlaying, gameScore = 20, prevDice;
const diceDOM = document.getElementsByClassName('dice');

function setGameScore() {
    gameScore = document.getElementById('scoreInput').value;
}

init();

document.querySelector('.btn-roll').addEventListener('click', function () {
    if ( gamePlaying ) {
        //  Create Random Number
        let dice1 = Math.floor(Math.random() * 6) + 1;
        let dice2 = Math.floor(Math.random() * 6) + 1;

        //Display The Result
        diceDOM[0].style.display = 'block';
        diceDOM[1].style.display = 'block';
        diceDOM[0].src = 'dice-' + dice1 + '.png';
        diceDOM[1].src = 'dice-' + dice2 + '.png';

        if ( dice1 !== 1 && dice2 !== 1 ) {
            // Print The Score & Add To Global Score
            roundScore += (dice1 + dice2);
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            // Reset The Score & Switch Users
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if ( gamePlaying ) {
        //  Add Current Score To The Global Score
        scores[activePlayer] += roundScore;

        //  Update UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        //  Check If Player Won The Game
        if ( scores[activePlayer] >= gameScore ) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner';
            diceDOM[0].style.display = 'none';
            diceDOM[1].style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});


function nextPlayer() {

    // Reset The Score & Switch Users
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    diceDOM[0].style.display = 'none';
    diceDOM[1].style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    diceDOM[0].style.display = 'none';
    diceDOM[1].style.display = 'none';
    console.log(diceDOM.length);
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'player 1';
    document.getElementById('name-1').textContent = 'player 2';
    document.getElementById('scoreInput').value = gameScore;
}

// document.querySelector('#current-' + activePlayer).textContent = dice;
// let x = document.querySelector('#score-0').textContent;
// console.log(x);



























































