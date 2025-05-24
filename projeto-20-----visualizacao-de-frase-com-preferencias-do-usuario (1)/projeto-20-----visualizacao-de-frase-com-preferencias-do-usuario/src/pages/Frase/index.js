import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PreferenciasSwitch from '../../components/PreferenciasSwitch';
import styles from './fraseStyle'; 

const Frase = () => {
  const [temaClaro, setTemaClaro] = useState(true);
  const [fontePequena, setFontePequena] = useState(true);

  const FRASE = `"A vingança nunca é plena, mata a alma e envenena"\n(Seu Madruga)`;

  useEffect(() => {
    const carregarPreferencias = async () => {
      const tema = await AsyncStorage.getItem('temaClaro');
      const fonte = await AsyncStorage.getItem('fontePequena');
      if (tema !== null) setTemaClaro(tema === 'true');
      if (fonte !== null) setFontePequena(fonte === 'true');
    };
    carregarPreferencias();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('temaClaro', temaClaro.toString());
    AsyncStorage.setItem('fontePequena', fontePequena.toString());
  }, [temaClaro, fontePequena]);

  const backgroundColor = temaClaro ? '#fff' : '#333';
  const textColor = temaClaro ? '#000' : '#fff';
  const fontSize = fontePequena ? 14 : 22;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <View style={styles.switches}>
        <PreferenciasSwitch
          label="Tema Claro"
          value={temaClaro}
          onValueChange={setTemaClaro}
        />
        <PreferenciasSwitch
          label="Fonte Pequena"
          value={fontePequena}
          onValueChange={setFontePequena}
        />
      </View>

      <ScrollView contentContainerStyle={styles.fraseContainer}>
        <Text style={[styles.fraseTexto, { color: textColor, fontSize }]}>
          {FRASE}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Frase;
