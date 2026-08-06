import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <Image source={require('../../assets/casual_dog.png')} style={styles.logo} />

      <Text style={styles.titulo}>Ótimo dia!</Text>
      <Text style={styles.subtitulo}>Como deseja acessar?</Text>

      <TouchableOpacity style={styles.button}>
        <Image source={require('../../assets/Google.png')} style={styles.icon} />
        <Text style={styles.buttonText}>Entrar com Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button2} onPress={() => navigation.replace('Login')}>
        <Text style={styles.buttonText2}>Outras opções</Text>
      </TouchableOpacity>
    </View>
  );
}