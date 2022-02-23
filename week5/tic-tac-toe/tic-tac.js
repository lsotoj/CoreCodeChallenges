function solveTTT(board) {
    let count = board.reduce((sum, current, index) => {
        if (current === "X") return ++sum;
        return sum;
    }, 0);

    function rand() {
        random = Math.floor(Math.random() * (9 - 0)) + 0;
        if (board[random] === "") {
            return random;
        }
        return rand();
    }

    if (count === 1) return rand();

}

function compare(arr) {
    console.log(arr.slice(6))
    let op1 = arr.slice(6).reduce((defauValue, current) => {
        //console.log(current === "x")
        return current !== "x"? false: true;
    }, false)

    return op1;
}

console.log(compare(["x", "o", "o", "", "o", "", "x", "x", "x"]))

//solveTTT(['O', '', '', 'O', 'X', '', 'X', 'O', 'X'])
//console.log(solveTTT(['', '', '', 'O', '', '', 'X', '', '']));

