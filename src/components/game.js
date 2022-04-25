import React from 'react';
import calculateWinner from '../helpers';
import Board from './board'

const styles = {
    width: '200px',
    margin: '20px auto'
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        const turnXNext = Math.random() > 0.5 ? true : false;
        this.state = {
            turnXNext:turnXNext,
            squares:Array(9).fill(null),
            winner:null
        }
        this.setState = this.setState.bind(this);
        //console.log('New game created.');
    }

    handler = () => {
        // check winning condition
        if (this.state.winner) {
            //console.log('we have a winner!')
        } else {
            //console.log(this.state.squares);

            this.setState({
                turnXNext:!this.state.turnXNext,
                winner:calculateWinner(this.state.squares)
            })
        }

    }

     Status() {
        let msg = '';
        if (this.state.winner) {msg += this.state.winner + ' Won!';}
        else {msg += 'Next player turn: ' + (this.state.turnXNext ? 'X' : 'O')}
        return (
            msg
        );
    }

    restart = () => {
        this.setState({
            squares:Array(9).fill(null),
            winner:null
        })
    }

    render() {
        return (
            <div style={styles} className='game'>
                <h1>
                    Tic-Tac-Toe
                </h1>
                <div className='game-board'>
                    <Board turnXNext={this.state.turnXNext} handler={this.handler} parentState={this.state} setState={this.setState}/>
                </div>
                <h3>{this.Status()}</h3>
                <button onClick={this.restart}>Restart</button>
            </div>
        )
    }
}

export default Game;