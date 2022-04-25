import React from 'react';

const style = {
    background: 'lightblue',
    border: '1px solid darkblue',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
}

class Square extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <button style={style} className='square' onClick={this.props.onClick}>
                {this.props.value}
            </button>
        )
    }
}

export default Square;