import GerarNumero from '../../pages/GerarNumero';

const GerarNumeroLogica = () => {

  const gerarNumero = () => Math.floor(Math.random() * 11);

  return <GerarNumero onDiscover={gerarNumero} />;
};

export default GerarNumeroLogica;
