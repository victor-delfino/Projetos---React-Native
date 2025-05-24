// App.js
import React, { useState } from 'react';
import { View, Text } from 'react-native';

import globalStyles from './src/styles/globalStyles';
import api from './src/services/api';
import CepInput from './src/components/CepInput/CepInput';
import EnderecoDisplay from './src/components/EnderecoDisplay/EnderecoDisplay';

export default function App() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState({});

  const consultaCep = async () => {
    try {
      const response = await api.get(`/${cep}/json/`);
      setEndereco(response.data);
    } catch (error) {
      console.warn('Erro ao buscar CEP', error);
    }
  };

  const limparEndereco = () => {
    setEndereco({});
    setCep('');
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titulo}>CEP x Endereço</Text>

      <CepInput
        cep={cep}
        setCep={setCep}
        onSearch={consultaCep}
        onClear={limparEndereco}
      />

      <EnderecoDisplay endereco={endereco} />
    </View>
  );
}