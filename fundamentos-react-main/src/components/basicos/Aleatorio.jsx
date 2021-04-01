import React from 'react';

export default (props) => {
    const { min, max } = props;    
    const aleatório = parseInt(Math.random() * (max - min)) + min;
    return (
        <div>
            <h2>Valor aleatório</h2>
            <p>
                <strong>Valor minimo: </strong>{min}
            </p>
            <p>
                <strong>Valor máximo: </strong>{max}
            </p>
            <p>
                <strong>Valor escolhido: </strong>{aleatório}
            </p>
    </div>
    );
};
    