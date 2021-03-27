import React from 'react';

export default (props) => {
    const { min, max } = props;    
    const aleatório = parseInt(Math.random() * (max - min)) + min;
    return (
        <div>
            <h2>Valor aleatório</h2>
            <p>
                <stron>Valor minimo: </stron>{min}
            </p>
            <p>
                <stron>Valor máximo: </stron>{max}
            </p>
            <p>
                <stron>Valor escolhido: </stron>{aleatório}
            </p>
    </div>
    );
};
    