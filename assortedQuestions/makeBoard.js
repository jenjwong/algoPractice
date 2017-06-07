function makeBoard(height, width) {
    let board = [];
    for (let i = 0; i < height; i++) {
        board.push(Array(width).fill(0));
    }
    return board;
}
