import React from 'react';
import BackButton from '../BackButton';

import './styles.css';

const FrontEndPage = () => (
  <div className="container">
    <h1>NaVitrine</h1>

    <p>
    O NaVitrine é uma aplicação web criada para pequenas empresas e microempreendedores individuais para a geração de um site próprio para exposição de seus produtos e mercadorias de forma simples, rápida e muito bem apresentada ao consumidor.
    <br/>
    - participei do desenvolvimento das páginas utilizando NextJS e Typescript para melhorar a experiência do usuário com a aplicação;
    <br/>
    - exercicia a responsabilidade de estilização das páginas utilizando Styled-Components;
    </p>

    <a className="link-navitrine" href="https://navitrine.app/" target="_blank"> Acesse o NaVitrine</a>

    <BackButton />
  </div>
);

export default FrontEndPage;