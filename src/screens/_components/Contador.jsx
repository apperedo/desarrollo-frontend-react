import { useState, useEffect } from 'react';

const Contador = () => {
    const [contador, setContador] = useState(0);
    const handleContador = () => {
        setContador(contador + 1);
    };

// Esta funcion especial se ejecuta cuando el componente se haya montado

    useEffect(() => {
        setContador(12);
    }, []);
    
// Esta funcion especial se ejecuta cuando haya cambiado el valor del contador
//https://react.dev/learn/thinking-in-react

    useEffect(() => {
        if (contador === 15) {
            alert('El contador ha llegado a 15');
        }
    }, [contador]);

// Esta funcion especial se ejecuta cuando el componente se desmonta

    useEffect(() => {
        return () => {
            console.log('El componente se desmontó');
        }
    },[]);

    return (
        <>
            <h4>Componente Contador</h4>
            <h5>{contador}</h5>
            <div>
                <button onClick={handleContador}>Aumentar</button>
                <button onClick={() => setContador(contador - 1)}>Disminuir</button>
            </div>
        </>
    );
};

export default Contador;