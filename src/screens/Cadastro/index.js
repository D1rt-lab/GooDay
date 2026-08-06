import { Text, View, Image, TextInput, TouchableOpacity, Pressable } from 'react-native';
import styles from './styles';
import { useNavigation } from "@react-navigation/native";
import { Checkbox } from 'expo-checkbox';

export default function Cadastro() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <Pressable style={styles.pressable} onPress={() => navigation.replace('Login')}>
        <Image source={require('../../assets/seta.png')} style={styles.logo} />
      </Pressable>

      <View style={styles.simple}>
        <Text style={styles.titulo}>Cadastre-se</Text>
        <Text style={styles.subtitulo}>informe seu E-mail e crie uma conta</Text>

        <Text style={styles.subtitulo2}>E-mail</Text>
        <TextInput style={styles.input} placeholder="Digite seu e-mail" />

        <Text style={styles.subtitulo2}>Senha</Text>
        <TextInput style={styles.input} placeholder="Digite sua senha" secureTextEntry />

        <Text style={styles.subtitulo2}>Repita a Senha</Text>
        <TextInput style={styles.input} placeholder="Digite sua senha" secureTextEntry />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>


        <View style={styles.divisor}>
          <View style={styles.line} />
          <Text style={styles.subtitulo4}>Ou continue com</Text>
          <View style={styles.line} />

        </View>

        <View style={styles.socialButtons}>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../../assets/Google.png')} style={styles.socialLogo} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../../assets/Facebook.png')} style={styles.socialLogo} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
