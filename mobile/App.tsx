import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import {
  useFonts,
  Karla_700Bold,
  Karla_400Regular,
  Karla_300Light,
} from '@expo-google-fonts/karla'
import { Loading } from '@components/Loading'

export default function App() {
  const [fontsLoaded] = useFonts({
    Karla_300Light,
    Karla_400Regular,
    Karla_700Bold,
  })

  return (
    <View className="flex-1 bg-zinc-950">
      <StatusBar style="auto" />
      {!fontsLoaded ? (
        <Loading />
      ) : (
        <Text className="font-heading">
          Open up App.js to start working on your app!
        </Text>
      )}
    </View>
  )
}
