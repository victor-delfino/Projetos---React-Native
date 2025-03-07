import { View } from 'react-native';
import ProfileImage from './src/ImgComponente';
import InfoSection from './src/InfoPessoal';

export default function MeuPerfilProfissional() {
  return (
    <View>
      <ProfileImage 
        uri="https://media.licdn.com/dms/image/v2/D4D03AQGge-I1-dITow/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1668558494533?e=1746057600&v=beta&t=TdEa7Js_gHHre4jDLBwLgbrhrLRh1nveYE3LdeFjYoY" 
        width={250} 
        height={250} 
      />
      <InfoSection title="Dados Pessoais:" content="Victor Hugo" />
      <InfoSection title="Formação:" content="ADS - Fatec PERIGOSA" />
      <InfoSection title="Experiência:" content="1 ano e 2 meses na área" />
      <InfoSection title="Projetos:" content="Liveteam" />
    </View>
  );
}
