import React, { useState } from 'react';
import GerarNumero from '../../pages/GerarNumero';

const GerarNumeroLogica = () => {
  const [resultado, setResultado] = useState(null);

  function gerarNumero() {
    setResultado(Math.floor(Math.random() * 101));
  }

  return <GerarNumero resultado={resultado} onDiscover={gerarNumero} />;
};

export default GerarNumeroLogica;
