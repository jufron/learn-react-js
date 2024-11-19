import React from "react";

function CounterDisplay ({ count }) {
    const style = {
        fontSize: '30px'
    };

    if (count === 0) {
        return (
            <p style={style}>{ count }</p>
        );
    } 
    if (count % 5 == 0 && count % 7 === 0) {
        return (
            <p style={style}>FizBuzz</p>
        );
    } 
    if (count % 5 === 0) {
        return (
            <p style={style}>Fiz</p>
        );
    } 
    if (count % 7 === 0) {
        return (
            <p style={style}>Buzz</p>
        );
    } 

    return (
        <p style={style}>{ count }</p>
    );
}

function IncreaseButton ({ increase }) {
    return (
        <button onClick={ increase }>+ Increase</button>
    );
}

function ResetButton ({ reset }) {
    return (
        <button onClick={ reset }>- Reset</button>
    );
}

class CounterApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };

        this.onIncreaseEventHandler = this.onIncreaseEventHandler.bind(this);
        this.onResetEventHandler = this.onResetEventHandler.bind(this);
    }

    onIncreaseEventHandler () {
        this.setState( prevState => {
            return {
                count: prevState.count + 1
            };
        });
    }

    onResetEventHandler () {
        this.setState({
            count: 0
        });
    }

    render () {
        for (let i = 0; i <= 20; i++) {
            if (i % 5 === 0) {
                console.log('fizz');
            } else if (i % 7 === 0) {
                console.log('buzz');
            } else if (i % 5 === 0 && i % 7 === 0) {
                console.log('fizbuzz');
            } else {
                console.log(i);
            }
        }
        
        return (
            <div>
                <IncreaseButton increase={ this.onIncreaseEventHandler } />
                <CounterDisplay count={ this.state.count } />
                <ResetButton reset={ this.onResetEventHandler } />
            </div>
        );
    }
}


export default CounterApp;