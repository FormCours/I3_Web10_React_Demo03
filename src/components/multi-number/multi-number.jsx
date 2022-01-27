import { useState } from 'react';

const MultiNumber = (props) => {

    // Utilisation du "useState" pour créer l'etat "total"
    const [total, setTotal] = useState(1);
    const [message, setMessage] = useState(null);

    const handleMulti2 = () => {
        console.log('x2');

        // Modification de l'etat "total"
        // -> Affection basé sur la valeur actuelle de l'etat "total"
        setTotal(t => t * 2);
        setMessage(null);
    }

    const handleReset = () => {
        console.log('Reset');

        // Modification de l'etat "total"
        // -> Affection d'une valeur de "1"
        setTotal(1);
        setMessage('[Reset]');
    }

    return (<>
        <h3>Demo du State !</h3>
        <div>
            <p>La valeur actuelle : {total} {message}</p>
            <button onClick={handleMulti2}>x2</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    </>);
};

export default MultiNumber;
