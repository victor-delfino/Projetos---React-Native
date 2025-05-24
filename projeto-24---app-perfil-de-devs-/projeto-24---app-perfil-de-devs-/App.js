import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';

import globalStyles from './src/styles/globalStyles';

import UserSearchInput from './src/components/UserSearchInput/UserSearchInput'; 
import UserInfoDisplay from './src/components/UserInfoDisplay/UserInfoDisplay'; 

import api from './src/services/api';

export default function App() {
  const [login, setLogin] = useState('');
  const [userData, setUserData] = useState(null);

  const buscarUsuario = async () => {
    try {
      const response = await api.get(`/users/${login}`);
      setUserData(response.data);
    } catch (error) {
      console.warn('Usuário não encontrado');
      setUserData(null);
    }
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titulo}>Perfil dos Devs</Text>

      {userData?.avatar_url && (
        <Image source={{ uri: userData.avatar_url }} style={globalStyles.avatar} />
      )}

      <UserSearchInput login={login} setLogin={setLogin} onSearch={buscarUsuario} />

      <UserInfoDisplay user={userData} />
    </View>
  );
}