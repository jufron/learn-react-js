import { createContext, useContext, useState } from "react";


const userContext = createContext();

const Card = () => {
    const [user, setUser] = useState({ name: 'james', email: 'james@gmail.com' });

    return (
        <>
            <userContext.Provider value={ user } >
                <Parent /> 
            </userContext.Provider>
        </>
    );
};

const Parent = () => {
    return (
        <Child />
    );
};

const Child = () => {
    const {name, email } = useContext(userContext);
    return (
        <div>
            Name : { name }, email : { email }
        </div>
    );
};

export default Card;