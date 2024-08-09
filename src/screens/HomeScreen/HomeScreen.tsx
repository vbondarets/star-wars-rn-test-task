import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/header/Header.component'
import { usePeople } from '../../hooks/people.hook'
import { FlatList, Text, View } from 'react-native'

const HomeScreen = () => {
  const { peoples, handleLoadMore } = usePeople()
  return (
    <SafeAreaView className={`flex-1 items-center flex-col px-6 gap-5`}>
      <Header title="Home" />
      <FlatList
        data={peoples}
        renderItem={el => <Text>{el.item.name}</Text>}
        // eslint-disable-next-line react/no-unstable-nested-components
        ItemSeparatorComponent={() => (
          // eslint-disable-next-line react/self-closing-comp
          <View className={'width-full h-3 bg-slate-100'}></View>
        )}
        keyExtractor={el => el.url}
        onEndReached={handleLoadMore}
      />
    </SafeAreaView>
  )
}

export default HomeScreen
