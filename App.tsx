import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native"
import { appStyles } from "./App"
import { useState } from "react"

const App = () => {
  const [value, setValue] = useState("Initial value")
  return (
    <View style={appStyles.container}>
      <Text style={appStyles.textStyle} >Name:</Text>
      <TextInput
        style={appStyles.input}
        placeholder="Useless placeholder"
        placeholderTextColor="#fff" />
      <Text style={appStyles.textStyle} >LastName:</Text>
      <TextInput
        style={appStyles.input}
        onChangeText={setValue}
        value={value} />
    </View>
  )
}



export default App;