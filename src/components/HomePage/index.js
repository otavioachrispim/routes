import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';

const HomePage = () => (
  <div className="container">
    <h1>Projetos desenvolvidos</h1>

    <div className="conteudo-opcoes">
      <Link className="navitrine" to='/navitrine'>NaVitrine</Link>
      <Link className="pally" to='/pally'>Pally</Link>
    </div>

  </div>
);

export default HomePage;