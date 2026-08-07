import { Text, View, Image, TextInput, TouchableOpacity, Pressable } from 'react-native';
import styles from './styles';
import { useNavigation } from "@react-navigation/native";
import { Checkbox } from 'expo-checkbox';
import React, { useState } from 'react';

export default function Login() {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [senha,setSenha] = useState("");
    const [ativo, setAtivo] = useState(true);

    function verificacao(){
        if(email != "adm" && senha != "1234"){
            //Mensagem ruim
        }else{
            // boa
        }

    }

    return (
        <View style={styles.container}>

            <Pressable style={styles.pressable} onPress={() => navigation.replace('Welcome')}>
                <Image source={require('../../assets/seta.png')} style={styles.logo} />
            </Pressable>
            <Text style={styles.titulo}>Acesse</Text>
            <Text style={styles.subtitulo}>com E-mail e senha</Text>

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
            maxLength={20}
            onChangeText={setSenha}
            value={senha} />

            <View style={styles.checkboxContainer}>
                <Checkbox
                    value={false}
                    onValueChange={() => { }}
                    color={false ? '#4630EB' : undefined}
                />
                <Text style={styles.subtitulo3}>Lembrar senha</Text>

                <TouchableOpacity style={styles.forgotPassword}>
                    <Text>Esqueci minha senha</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={styles.buttonText2}>Cadastrar</Text>
                </TouchableOpacity>

            </View>

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
    );
}
