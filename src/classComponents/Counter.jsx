import React from "react";

class Counter extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            count: 0,
            sidebar: false,
            name: 'james',
            email: 'james@gmail.com'
        }
    }

    increment = () => {
        this.setState({ count: this.state.count + 1});
    };

    sidebarToggle = () => {
        this.setState({ sidebar: true });
    };

    setNameAndEmail = () => {
        const inputName = prompt('masukan nama anda');
        const inputEmail = prompt('masukan alamat email anda');

        this.setState({ 
            name: inputName, 
            email: inputEmail 
        });
    };

    counter = () => {
        this.setState((previusState) => {
            return { count: previusState.count + 1 };
        });
    };

    render () {
        const { count, sidebar, name, email } = this.state;

        console.log(sidebar);

        return (
            <div>
                <h1>nama : { name } alamt email { email }</h1>
                <p>counter { count }</p>
                <button onClick={this.increment}>klik saya</button>
                <button onClick={this.sidebarToggle}>toggle sidebar</button>
                <button onClick={this.setNameAndEmail}>ganti nama dan email</button>
            </div>
        );
    }
}

export default Counter;