import React from "react";

class SayHello extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        const { name, email, jurusan } = this.props;

        return (
            <p>Hallo nama saya { name }, alamat email saya { email } dan jurusan saya { jurusan } </p>
        );
    }
}

export default SayHello;