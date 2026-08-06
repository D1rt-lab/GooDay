import { Text, View, Image, Pressable } from 'react-native';
import styles from './styles';
import { useNavigation } from "@react-navigation/native";

export default function Home() {
    const navigation = useNavigation();

  return (
    <Pressable style={styles.container} onPress={() => navigation.replace('Welcome')}>
    <View>
      <Image source={require('../../assets/logotipo.png')} style={styles.logo} />
    </View>
    </Pressable>
  );
}
