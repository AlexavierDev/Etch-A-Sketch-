let color = 'black'



function madeBoard(size) {

    let board = document.querySelector(".board")
    let squares = board.querySelectorAll("div")

    squares.forEach((div) => div.remove())


    board.style.gridTemplateColumns = `repeat(${size},1fr)`
    board.style.gridTemplateRows = `repeat(${size},1fr)`

    let amount = size * size

    for (i = 0; i < amount; i++) {
        let square = document.createElement("div")
        square.style.border = "1px solid #F3EBE9"
        square.addEventListener("mouseover", colorSquare)
        board.insertAdjacentElement('beforeend', square)
    }
}

madeBoard(16)

function changeSize(input) {
    if (input >= 2 && input <= 100) {
        madeBoard(input)
    } else {
        alert("type one value greater that 2 or less that 100")
    }

}

function colorSquare() {
    if (color == "random") {
        this.style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16)
    } else {
        this.style.backgroundColor = color
    }
}

function changeColor(choice) {
    color = choice
}

function reset() {
    let board = document.querySelector(".board")
    let squares = board.querySelectorAll("div")
    squares.forEach((div) => (div.style.backgroundColor = "white"));
}