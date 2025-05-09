import React from 'react';
import { View, Text, Image, Button, ScrollView } from 'react-native';
import styles from './styles';

const produtos = [
  {
    nome: 'Pera',
    imagem: { uri: 'https://gastronomiacarioca.zonasul.com.br/wp-content/uploads/2023/08/pera.png' },
    descricao: 'Uma pera doce e suculenta.',
  },
  {
    nome: 'Morango',
    imagem: { uri: 'https://media.istockphoto.com/id/1157946861/pt/foto/red-berry-strawberry-isolated.jpg?s=612x612&w=0&k=20&c=7dkq_6UbPDxCxSq9qb_fDpUT0WReuoZ1xWErUIGoYmg=' },
    descricao: 'Morango fresco direto da fazenda.',
  },
  {
    nome: 'Melancia',
    imagem: { uri: 'https://media.istockphoto.com/id/1125584344/pt/foto/watermelon-slice-isolated-on-white-background-clipping-path-full-depth-of-field.jpg?s=612x612&w=0&k=20&c=wWj6ZgpGziC_Dziu0JFYCazBQQ8-bt_euH4r3ks0wH4=' },
    descricao: 'Melancia refrescante de verão.',
  },
];

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Anúncios</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {produtos.map((item, index) => (
          <View key={index} style={styles.card}>
            <Image source={item.imagem} style={styles.imagem} />
            <Text style={styles.nome}>{item.nome}</Text>
            <Button
              title="Ver detalhes"
              onPress={() => navigation.navigate('Detalhes', { produto: item })}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
