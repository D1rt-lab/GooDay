import { Text, View, Image, Pressable } from 'react-native';
import styles from './styles';
import { useNavigation } from "@react-navigation/native";
import React, { useEffect} from 'react';

export default function Home() {
    const navigation = useNavigation();
    
    useEffect(() => {
      const timer = setTimeout (() => {
        navigation.replace("Welcome");
      }, 3000); //Espera 3 segundos

      return () => clearTimeout(timer); //Limpa o timer se sair da tela
    }, [navigation]);
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logotipo.png')} style={styles.logo} />
    </View>
  );
}
