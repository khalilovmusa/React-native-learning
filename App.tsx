import { StyleSheet, Text, View } from "react-native"
import { appStyles } from "./App"

const App = () => {
  return (
    <View style={appStyles.container}>
      <Text style={appStyles.textStyle}>
        Hello world
      </Text>
      <View style={appStyles.block} >

      </View>
    </View>
  )
}



export default App