
const SimpleEvent = () => {

    const handleClickButton = (event) => {
        console.log(event);
        console.log('Coucou Manon');
    }

    const handleTextChange = (event) => {
        console.log(event.target.value);
    }

    return (<>
        <h3>Demo event</h3>
        {/* ↓ Equivalent au "addEventListener('click', ...)" du JavaScript */}
        <button onClick={handleClickButton}>Click here !!!</button>
        {/* ↓ Equivalent au "addEventListener('change', ...) mais qui s'active directement" */}
        <input onChange={handleTextChange} type='text'/>
        <p>N'hesite pas a regarder le resultat dans la console =p</p>
    </>);
}

export default SimpleEvent;