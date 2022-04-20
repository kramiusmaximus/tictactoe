function calculateWinner(arr) {
    const lines = [
        [0, 1, 2],
        [1, 2, 3],
        [4, 5, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c] ) {
            return arr[a];
        }
    }
    return null;
}

export default calculateWinner;