import React from 'react';

class MyComponent extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        const { name } = this.props;
        
        return (
            <h1>Hello react class component { name }</h1>       
        );
    }
}

export default MyComponent;