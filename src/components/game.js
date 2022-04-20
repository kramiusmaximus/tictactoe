import React, { useState } from 'react';
import calculateWinner from '../helpers'
import Board from './board'

const styles = {
    width: '200px',
    margin: '20px auto'
}

let i = 0;

const Game = () => {
    const [history, setHist] = useState([Array(9).fill(null)]);
    const [index, setIndex] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(history[index]);

    const handleClick = (i) => {
        const timeInHistory = history.slice(0,index + 1);
        const current = timeInHistory[timeInHistory.length - 1];
        const squares = [...current];
        // If user clicks on occupied square do nothing
        if (winner || squares[i]) return;
        // else set X or O depending on whose turn is next
        squares[i] = xIsNext ? 'X' : 'O';
        setXisNext(!xIsNext);
        setHist([...timeInHistory, squares]);
        setIndex(timeInHistory.length);
    }

    const restart = () => (
        <button onClick={() => {
            setIndex(0);
            setHist([Array(9).fill(null)]);
        }}>Restart</button>
    )

    const prevBoardState = () => {
        setIndex(index - 1 <= 0 ? 0 : index - 1);
        setXisNext(!xIsNext);
        //setBoard(history[index]);
    }
    const nextBoardState = () => {
        if (index < history.length - 1) {
            setIndex(index + 1);
            setXisNext(!xIsNext);
        }
        
        //setBoard(history[index]);
    }

    return (
        <>
            <Board squares={history[index]} onClick={handleClick} />
            <div style={styles}>
                <p>{winner ? 'Winner:' + winner : 'Next player: ' + (xIsNext ? 'X' : 'O')}</p>
                <button onClick={prevBoardState}>Prev</button>
                {restart()}
                <button onClick={nextBoardState}>Next</button>
            </div>
        </>
    )
}

export default Game;