import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  return (
    <SafeAreaView className={`flex-1 items-center flex-col px-6 `}>
      <Text>{'HOME'}</Text>
    </SafeAreaView>
  )
}

export default HomeScreen