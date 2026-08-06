import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e5e0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 400,
    height: 320,
    marginTop: -80,
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 14,
    marginBottom: 60,
    marginTop: -10,
    fontWeight: 'bold',

  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#14cb74',
    padding: 12,
    borderRadius: 5,
    width: 350,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  button2: {
    backgroundColor: '#fff',
    borderRadius: 5,
    marginTop: 10,
    width: 350,
    height: 60,
  },
  buttonText2: {
    color: '#2f2623',
    fontSize: 16,
    alignSelf: 'center',
    justifyContent: 'center',
    borderColor: '#14cb74',
    borderWidth: 1.5,
    borderRadius: 5,
    width: 350,
    height: 60,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
    right: 70,
  },
  buttonText: {
    color: '#e8e5e0',
    fontSize: 16,
    right: 20,
  },
});