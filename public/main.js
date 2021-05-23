let p1 = 'notPicked'
let p2 = 'notPicked'
let winner = 'nope'

function makeChoice1(event) {
  const choiceClicked = event.target
  if (choiceClicked.classList.contains('rock')) {
    p1 = 'rock'
    console.log(p1)
    if (p2 != 'notPicked') {
      choicesMade()
    }
    return
  }
  if (choiceClicked.classList.contains('paper')) {
    p1 = 'paper'
    console.log(p1)
    if (p2 != 'notPicked') {
      choicesMade()
    }
    return
  }
  if (choiceClicked.classList.contains('scissors')) {
    p1 = 'scissors'
    console.log(p1)
    if (p2 != 'notPicked') {
      choicesMade()
    }
    return
  }
}

function makeChoice2(event) {
  const choiceClicked = event.target
  if (choiceClicked.classList.contains('rock')) {
    p2 = 'rock'
    console.log(p2)
    if (p1 != 'notPicked') {
      choicesMade()
    }
    return
  }
  if (choiceClicked.classList.contains('paper')) {
    p2 = 'paper'
    console.log(p2)
    if (p1 != 'notPicked') {
      choicesMade()
    }
    return
  }
  if (choiceClicked.classList.contains('scissors')) {
    p2 = 'scissors'
    console.log(p2)
    if (p1 != 'notPicked') {
      choicesMade()
    }
    return
  }
}

function choicesMade() {
  console.log(p1 + ' vs ' + p2)
  if (p1 === p2) {
    console.log('Draw!')
    document.querySelector('.winner h2').textContent = winner
    return
  }
  if (p1 === 'scissors' && p2 === 'paper') {
    console.log('Player 1 won!')
    winner = 'player1'
    document.querySelector('.winner h2').textContent = winner
  } else if (p1 === 'paper' && p2 === 'rock') {
    console.log('Player 1 won!')
    winner = 'player1'
    document.querySelector('.winner h2').textContent = winner
  } else if (p1 === 'rock' && p2 === 'scissors') {
    console.log('Player 1 won!')
    winner = 'player1'
    document.querySelector('.winner h2').textContent = winner
  } else {
    console.log('Player 2 won!')
    winner = 'player2'
    document.querySelector('.winner h2').textContent = winner
  }
}

function resetGame(event) {
  const startOver = event.target

  if (startOver.classList.contains('reset')) {
    p1 = 'notPicked'
    p2 = 'notPicked'
    winner = 'nope'
    document.querySelector('.winner h2').textContent = ''
  }
}

function main() {}
document.querySelector('.p1').addEventListener('click', makeChoice1)

document.querySelector('.p2').addEventListener('click', makeChoice2)

document.querySelector('.over').addEventListener('click', resetGame)

document.addEventListener('DOMContentLoaded', main)
