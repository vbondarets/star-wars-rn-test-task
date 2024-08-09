import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/header/Header.component'
import { usePeople } from '../../hooks/people.hook'
import { FlatList, View } from 'react-native'
import CharacterComponent from '../../components/character/Character.component'
import CounterComponent from '../../components/counter/Counter.component'

const HomeScreen = () => {
  const { peoples, handleLoadMore, liked, handleRemoveLike, handleSetLike } =
    usePeople()
  return (
    <SafeAreaView className={`flex-1 items-center flex-col gap-y-5 w-full`}>
      <Header title="Home" />
      <CounterComponent liked={liked} />
      <FlatList
        className={'w-full px-6'}
        data={peoples}
        renderItem={el => {
          const isLiked = Boolean(liked.some(like => like.url === el.item.url))
          return (
            <CharacterComponent
              character={el.item}
              isLiked={isLiked}
              handleLike={isLiked ? handleRemoveLike : handleSetLike}
            />
          )
        }}
        // eslint-disable-next-line react/no-unstable-nested-components
        ItemSeparatorComponent={() => <View className={'width-full h-3'} />}
        keyExtractor={el => el.url}
        onEndReached={handleLoadMore}
      />
    </SafeAreaView>
  )
}

export default HomeScreen
