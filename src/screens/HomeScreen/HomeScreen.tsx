import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/header/Header.component'

const HomeScreen = () => {
  return (
    <SafeAreaView className={`flex-1 items-center flex-col px-6 `}>
      <Header title="Home" />
    </SafeAreaView>
  )
}

export default HomeScreen
