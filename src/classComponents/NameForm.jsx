import React from "react";

class NameForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: ''
        };

        this.onNameChangeHandler = this.onNameChangeHandler.bind(this);
        this.onEmailChangeHandler = this.onEmailChangeHandler.bind(this);
    }

    // ? konsep function classic tidak mengenal this
    onNameChangeHandler (event) {
        this.setState({ name: event.target.value });
    }

    onEmailChangeHandler (event) {
        this.setState({ email: event.target.value });
    }

    render() {
        const { name, email } = this.state;

        return (
            <>
                <h1>name: { name }</h1>
                <h1>email: { email }</h1>
                <form>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            value={ name } 
                            onChange={this.onNameChangeHandler} 
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Eamil</label>
                        <input 
                            id="email" 
                            type="text" 
                            value={ email } 
                            onChange={this.onEmailChangeHandler} 
                        />
                    </div>
                </form>
            </>
        );
    }
}

export default NameForm;