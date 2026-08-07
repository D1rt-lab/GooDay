import { Text, View, Image, TextInput, TouchableOpacity, Pressable } from 'react-native';
import styles from './styles';
import { useNavigation } from "@react-navigation/native";
import { Checkbox } from 'expo-checkbox';
import React, { useState } from 'react';

export default function Cadastro() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senha2, setSenha2] = useState("");
  const [errorMensage, setErrorMensage] = useState(false);
  const [checkMensage, setCheckMensage] = useState(false);
  const [loading, setLoading] = useState(false);


  function verificacao() {
    if (loading) return;

    setLoading(true);

    if (senha && senha2 && senha === senha2) {
      setCheckMensage(true);

      setTimeout(() => {
        setCheckMensage(false);
        setLoading(false);
        navigation.replace("Home");
      }, 3000);

    } else {
      setErrorMensage(true);

      setTimeout(() => {
        setErrorMensage(false);
        setLoading(false);
      }, 3000);
    }
  }
  return (
    <View style={styles.container}>

      <Pressable style={styles.pressable} onPress={() => navigation.replace('Login')}>
        <Image source={require('../../assets/seta.png')} style={styles.logo} />
      </Pressable>

      <View style={styles.simple}>
        <Text style={styles.titulo}>Cadastre-se</Text>
        <Text style={styles.subtitulo}>informe seu E-mail e crie uma conta</Text>

        <Text style={styles.subtitulo2}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          maxLength={50}
          onChangeText={setEmail}
          value={email} />

        <Text style={styles.subtitulo2}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry
          maxLength={50}
          onChangeText={setSenha}
          value={senha} />

        <Text style={styles.subtitulo2}>Repita a Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry
          maxLength={50}
          onChangeText={setSenha2}
          value={senha2} />

        {errorMensage && (
          <Text style={styles.subtitulo5}>Algo de errado no cadastro!</Text>
        )}
        {checkMensage && (
          <Text style={styles.subtitulo6}>Seu cadastro deu certo!!</Text>
        )}

        <TouchableOpacity style={styles.button} onPress={verificacao}>
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
