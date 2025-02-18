import { StyleSheet } from "react-native"

export const appStyles = StyleSheet.create({
    container: {
      backgroundColor: 'black',
      color: '#fff',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    textStyle: {
      color: '#fff',
      borderWidth: 1,
      borderColor: '#fff',
      borderRadius: 5,
      padding: 10,
      fontSize: 22,
      fontFamily: 'monospace'
    },
    block: {
      width: '20%',
      height: '50%',
      backgroundColor: '#fff'
    },
    input: {
        height: '10%',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#fff',
        padding: 10,
        width: '90%',
        color: '#fff'
    }
  })