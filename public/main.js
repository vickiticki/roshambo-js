let p1 = 'notPicked'
let p2 = 'notPicked'
let winner = 'nope'
let over = false

function render() {
  const html = `    <header>
  <h1>Rock Paper Scissors</h1>
</header>

<main>
  <section class="player1">
    <h2>Player One</h2>
    <div class="p1 buttons">
      <button class="rock">Rock</button>
      <button class="paper">Paper</button>
      <button class="scissors">Scissors</button>
      <button class="lizard">Lizard</button>
      <button class="spock">Spock</button>
    </div>
    <img class="p1Image hide" src="images/rock.jpg" />
  </section>

  <section class="winner message">
    <h2></h2>
    <div class="rules of game">
      <img
        src="images/Rock_paper_scissors_lizard_spock.png"
        alt="Rules of game. Rock beats scissors and lizard. Paper beats rock and Spock. Scissors beat paper and lizard. Lizard beats Spock and paper. Spock beats scissors and rock."
      />
    </div>
  </section>

  <section class="player2">
    <h2>Player Two</h2>
    <div class="p2 buttons">
      <button class="rock">Rock</button>
      <button class="paper">Paper</button>
      <button class="scissors">Scissors</button>
      <button class="lizard">Lizard</button>
      <button class="spock">Spock</button>
      </div>
      <img class="p2Image hide" src="images/rock.jpg" />
      </section>
      </main>
      <div class="start over">
      <button class="reset button">Play Again</button>
      </div>`

  document.body.innerHTML = html
  document.querySelector('.p1').addEventListener('click', makeChoice1)

  document.querySelector('.p2').addEventListener('click', makeChoice2)

  document.querySelector('.over').addEventListener('click', resetGame)
}

function makeChoice1(event) {
  const choiceClicked = event.target
  if (over === true) {
    console.log('game is over')
    return
  }
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
  if (choiceClicked.classList.contains('lizard')) {
    p1 = 'lizard'
    console.log(p1)
    if (p2 != 'notPicked') {
      choicesMade()
    }
    return
  }
  if (choiceClicked.classList.contains('spock')) {
    p1 = 'spock'
    console.log(p1)
    if (p2 != 'notPicked') {
      choicesMade()
    }
    return
  }
}

function makeChoice2(event) {
  if (over === true) {
    console.log('game is over')
    return
  }
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
  if (choiceClicked.classList.contains('lizard')) {
    p2 = 'lizard'
    console.log(p2)
    if (p1 != 'notPicked') {
      choicesMade()
    }
    return
  }
  if (choiceClicked.classList.contains('spock')) {
    p2 = 'spock'
    console.log(p2)
    if (p1 != 'notPicked') {
      choicesMade()
    }
    return
  }
}

function choicesMade() {
  over = true

  document.querySelector('.p1').classList.add('hide')
  document.querySelector('.p1Image').classList.remove('hide')
  document.querySelector('.p1Image').src = `images/${p1}.jpg`

  document.querySelector('.p2').classList.add('hide')
  document.querySelector('.p2Image').classList.remove('hide')
  document.querySelector('.p2Image').src = `images/${p2}.jpg`
  document.querySelector('.rules').classList.add('hide')

  // create p1Image and pick src based on p1 choice

  console.log(p1 + ' vs ' + p2)
  if (p1 === p2) {
    console.log('Draw!')
    document.querySelector('.winner h2').textContent = 'Draw!'
    return
  }
  if (
    (p1 === 'scissors' && p2 === 'paper') ||
    (p1 === 'scissors' && p2 === 'lizard')
  ) {
    console.log('Player 1 won!')
    winner = 'player1'
    document.querySelector('.winner h2').textContent = 'Player One Wins!'
  } else if (
    (p1 === 'paper' && p2 === 'rock') ||
    (p1 === 'paper' && p2 === 'spock')
  ) {
    console.log('Player 1 won!')
    winner = 'player1'
    document.querySelector('.winner h2').textContent = 'Player One Wins!'
  } else if (
    (p1 === 'rock' && p2 === 'scissors') ||
    (p1 === 'rock' && p2 === 'lizard')
  ) {
    console.log('Player 1 won!')
    winner = 'player1'
    document.querySelector('.winner h2').textContent = 'Player One Wins!'
  } else if (
    (p1 === 'lizard' && p2 === 'paper') ||
    (p1 === 'lizard' && p2 === 'spock')
  ) {
    console.log('Player 1 won!')
    winner = 'player1'
    document.querySelector('.winner h2').textContent = 'Player One Wins!'
  } else if (
    (p1 === 'spock' && p2 === 'rock') ||
    (p1 === 'spock' && p2 === 'scissors')
  ) {
    console.log('Player 1 won!')
    winner = 'player1'
    document.querySelector('.winner h2').textContent = 'Player One Wins!'
  } else {
    console.log('Player 2 won!')
    winner = 'player2'
    document.querySelector('.winner h2').textContent = 'Player Two Wins!'
  }
}

function resetGame(event) {
  const startOver = event.target

  if (startOver.classList.contains('reset')) {
    over = false
    p1 = 'notPicked'
    p2 = 'notPicked'
    winner = 'nope'
    document.querySelector('.winner h2').textContent = ''
    render()
  }
}

function main() {
  render()
}

document.addEventListener('DOMContentLoaded', main)
