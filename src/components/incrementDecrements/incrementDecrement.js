import React, {useState} from 'react';

    const IncrementDecrement = () => {

        let [counter,setCounter] = useState(0);

        const onClickIncrement = () => {console.log('increment');
        setCounter(++counter);
        console.log(counter);
        };
        const onClickDecrement = ()=> {console.log('decrement');
        setCounter(--counter);
        console.log(counter);
        };

        return (
        <div>
            <h2>значення = {counter}</h2>
            <button onClick={onClickIncrement}>добвити 1</button>
            <button onClick={onClickDecrement}>відняти 1</button>
        </div>
    );
};
export default IncrementDecrement;