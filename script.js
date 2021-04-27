const score = document.querySelector('.score')
const message = document.querySelector('.message')
const buttons = document.querySelectorAll('button')
const winnerScores = [0,0]

buttons.forEach(button => { // перебираем все кнопки
    button.addEventListener('click', playGame) // каждая кнопка выполняет функцию playGame при клике
})

function playGame(e) { // передаем в функцию объект event
    let playerSelection = e.target.innerText // выводим в переменную значения нажатого элемента

    let computerSelection = Math.random() // создаем переменную для выбора компьютера,
    // делаем Math.random для того чтобы выбрать случайное значение

    if (computerSelection < .34) { // Если меньше .34, компьютер селекш будет равен Камню
        computerSelection = 'Rock'
    } else if (computerSelection < .67) { // Если меньше .67, компьютер селекш будет равен Бумаге
        computerSelection = 'Paper'
    } else {
        computerSelection = 'Scissors' // В остальных случаях выведет ножницы
    }

    let result = checkWinner(playerSelection, computerSelection) // создаем переменную,
    // в которой выполняется функция проверки победителя
    // в эту функцию мы передаем наш playerSelection и computerSelection
    // так как они находятся в функции playGame, а не созданы глобально

    if (result === 'Player') { // если значение, которое вернет переменная result === 'Player',
        result += ' wins!' // то запиши в result ' wins!'
        winnerScores[0]++ // добавь к очкам игрока +1 при выигрыше
    }
    if (result === 'Computer') { // если значение, которое вернет переменная result === 'Computer',
        result += ' wins!' // то запиши в result ' wins!'
        winnerScores[1]++ // добавь к очкам компьютера +1 при выигрыше
    }
    if (result === 'Draw') { // если значение, которое вернет переменная result === 'Draw',
        result += ': Its a tie!' // то запиши в result ' Its a tie!'
    }

    score.innerHTML = 'Player [' + winnerScores[0] + '] Computer [' + winnerScores[1] + ']' // выводим в пустой див очки каждого игрока

    messenger('Player: ' + playerSelection + ' Computer: ' + computerSelection + '<br>' + result) // функция для вывода результатов
}

function messenger(selectionMessage) { // функция для вывода результатов
    message.innerHTML = selectionMessage // присваиваем пустому диву message аргумент selectionMessage
}

function checkWinner(player, computer) { // функция для проверки победителя
    if (player === computer) { // если выбор игрока равен выбору компьютера, то верни Draw
        return 'Draw'
    }
    if (player === 'Rock') { // если игрок выбрал Камень, а компьютер выбрал Бумагу, верни 'Computer', в другом случае 'Paper'
        if (computer === 'Paper') {
            return 'Computer'
        } else {
            return 'Player'
        }
    }
    if (player === 'Paper') {
        if (computer === 'Scissors') {
            return 'Computer'
        } else {
            return 'Player'
        }
    }
    if (player === 'Scissors') {
        if (computer === 'Rock') {
            return 'Computer'
        } else {
            return 'Player'
        }
    }
}