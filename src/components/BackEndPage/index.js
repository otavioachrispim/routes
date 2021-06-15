import React from 'react';
import BackButton from '../BackButton';

import './style.css';

const BackEndPage = () => (
  <div className="container">
    <h1>@Pally</h1>

    <p>
    Atualmente exerço a função de desenvolvedor front-end junior na Pally.
    <br />
    <br />
    https://heypally.com/
    <br />
    <br />
    O Pally é uma plataforma web para os estabelecimentos atraírem novos clientes através de recompensas.
    <br />
    - trabalho com a equipe de programação utilizando ReactJS e Typescript para desenvolvimento das páginas conforme mockup;
    <br />
    - utilizo conceitos de estado, componente e imutabilidade do ReactJS;
    <br />
    - integrar dados do back no front através de API Rest;
    </p>

    <a href="https://heypally.com/" target="_blank"> Acesse o Pally</a>

    <BackButton />
  </div>
);

export default BackEndPage;