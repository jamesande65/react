import React from 'react';
// import './counter.css';

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            number: 0
        }
    }

    inc() {
        this.setState({
            number: ++this.state.number
        });
    }

    dec() {
        this.setState({
            number: --this.state.number
        });
    }

    render() {
        const { number } = this.state;
        return (
            <div>
                <h1>Counter
                    <span style={ {color: number > 0 ? 'green' : 'yellow'} }> { number }</span>
                </h1>
                <button onClick={this.inc.bind(this)}>+</button>
                <button onClick={this.dec.bind(this)}>-</button>
            </div>
        )
    }
}

export default Counter;