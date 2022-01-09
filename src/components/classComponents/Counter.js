import { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 11,
        };
    }

    decrementCounter(e) {
        this.setState((prevState) => ({ count: prevState.count - 1 }));
    }

    incrementCounter() {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    }

    render() {
        return (
            <div className='counter'>
                <h3>Book Counter</h3>
                <button onClick={(e) => this.decrementCounter(e)}>-</button>
                <span>{this.state.count}</span>
                <button onClick={this.incrementCounter.bind(this)}>+</button>
            </div>
        );
    }
}

export default Counter;
