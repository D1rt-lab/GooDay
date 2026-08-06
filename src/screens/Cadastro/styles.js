import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e5e0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 40,
    height: 40,
  },
  pressable: {
    position: 'absolute',
    top: 55,
    left: 40,
  },
    titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2f2623',
    top: -75,
    left: -70,
  },
  subtitulo: {
    fontSize: 16,
    marginBottom: 20,
    color: '#2f2623',
    top: -90,
    left: -24,
  },
  subtitulo2: {
    fontSize: 16,
    marginBottom: 5,
    color: '#2f2623',
    alignSelf: 'flex-start',
    left: 50,
    top: -80,
  },
  subtitulo4: {
    fontSize: 16,
    marginBottom: 5,
    color: '#2f2623',
    alignSelf: 'flex-start',
  },
  input: {
    height: 60,
    width: 330,
    borderColor: '#ccc',
    borderWidth: 0.1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 8,
    backgroundColor: '#e3e7f3',
    top: -80,
    left: -1,
  },
  button: {
    backgroundColor: '#14cb74',
    paddingVertical: 23,
    paddingHorizontal: 150,
    borderRadius: 15,
    top: -10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  divisor: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '45%',
  },
  socialButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  socialLogo: {
    width: 60,
    height: 60,
  }, 
  simple: {
    top: 25,
    backgroundColor: '#e8e5e0',
    alignItems: 'center',
    justifyContent: 'center',
  },   
});
