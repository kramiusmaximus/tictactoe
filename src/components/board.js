import React from 'react';
import Square from './square'

const style = {
    border: '1px solid darkblue',
    width: '250px',
    height: '250px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
}


class Board extends React.Component {

    handleClick(i) {
        const newStateSquares = this.props.parentState.squares.slice();
        if (newStateSquares[i] == null && !this.props.parentState.winner) {
            newStateSquares[i] = this.props.turnXNext ? 'X' : 'O';
            this.props.setState({squares:newStateSquares}, this.props.handler);
        }
    }

    renderSquare(i) {
        return (
            <Square key={'Square ' + i} value={this.props.parentState.squares[i]} onClick={() => this.handleClick(i)}/>
        )
    }

    render() {
        return (
        <div style={style}>
            {
                this.props.parentState.squares.map((square, i) => {
                    return this.renderSquare(i);
                })
            }
        </div>)
    }
}

export default Board;