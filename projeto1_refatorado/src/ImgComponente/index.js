import { View, Image } from 'react-native';
import styles from './styles'; 

function Componente4() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://media.licdn.com/dms/image/v2/D4D03AQGge-I1-dITow/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1668558494533?e=1746057600&v=beta&t=TdEa7Js_gHHre4jDLBwLgbrhrLRh1nveYE3LdeFjYoY' }}
        style={styles.image}
      />
    </View>
  );
}

export default Componente4;
