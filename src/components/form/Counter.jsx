import { useState } from "react";
import MyButton from "../buttons/MyButton";

function Counter() {
    let [counter, setCounter] = useState(0);

    function handleClickIncrement () {
        setCounter(prev => {
            return prev + 1;
        });
        setCounter(prev => {
            return prev + 1
        });
        setCounter(prev => {
            return prev + 1
        });
    }

    function handleClickDecrement () {
        if (counter === 0) {
            alert('counter is zero');
            setCounter(counter = 0);
        } else {
            setCounter(counter - 1);
        }
    }

    function handleClickReset () {
        setCounter(0);
    }

    return (
        <>
            <MyButton onClick={handleClickIncrement} text="incrmenet" />
            <MyButton onClick={handleClickDecrement} text="decrement" />
            <MyButton onClick={handleClickReset} text="reset" />
            <h1>counter : {counter}</h1>
        </>
    );
}

export default Counter;