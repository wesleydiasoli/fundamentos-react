import './App.css';
import React from 'react';

import ParOuImpar from './components/Condicional/ParOuImpar';

import Card from './components/Layout/Card';

import TabelaProdutos from './components/Repeticao/TabelaProdutos';

import ListaALunos from './components/Repeticao/ListaALunos';

import Familia from './components/basicos/Familia';

import FamiliaMenbro from './components/basicos/FamiliaMenbro';

import Aleatorio from './components/basicos/Aleatorio';

import Primeiro from './components/basicos/Primeiro';

import ComParametro from './components/basicos/ComParametro';

import Fragmento from './components/basicos/Fragmento';


export default () => (
        <div className="App">
            <h1>Fundamentos React</h1>
            
            <div className="Cards">
            
            <Card titulo="#08 - Renderização Condicional" color="#982395">
                <ParOuImpar numero={20}/>
            </Card>
            
            <Card titulo="#07 - Desafio Repetição" color="#3A9AD9">
                <TabelaProdutos />
            </Card>

            <Card titulo="#06 - Repetição" color="#FF4C65">
                <ListaALunos></ListaALunos>
            </Card>

            <Card titulo="#05 - Componentes Com FIlhos" color="#00C8F8">
                <Familia sobrenome="Dias" > 
                    <FamiliaMenbro nome="Pedro" />
                    <FamiliaMenbro nome="Gabs" />
                    <FamiliaMenbro nome="João" />
                </Familia>    
            </Card>

            <Card titulo="#04 DEsafio Aleatório- " color="#FA6900">
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo="#03 - Fragmento" COLOR="#E94C6F">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com Parâmetro" color="#E8671A">
                <ComParametro
                    titulo="Situação do aluno"
                    aluno="Wesley" 
                    nota={9.3} 
                />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#588C73">
                <Primeiro></Primeiro>
            </Card></div>
            
            
            
        </div>
);
