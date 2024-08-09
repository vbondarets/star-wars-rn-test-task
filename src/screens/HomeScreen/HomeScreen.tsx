import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/header/Header.component'
import { usePeople } from '../../hooks/people.hook'

const HomeScreen = () => {
  const {} = usePeople()
  return (
    <SafeAreaView className={`flex-1 items-center flex-col px-6 gap-5`}>
      <Header title="Home" />
    </SafeAreaView>
  )
}

export default HomeScreen
