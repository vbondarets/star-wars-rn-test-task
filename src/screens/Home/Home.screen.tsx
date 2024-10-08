import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/header/Header.component'
import { usePeople } from '../../hooks/people.hook'
import { FlatList, View } from 'react-native'
import CharacterComponent from '../../components/character/Character.component'
import CounterComponent from '../../components/counter/Counter.component'
import { useNavigation } from '../../hooks/navigation.hook'
import { text } from '../../text/text'

const HomeScreen = () => {
  const {
    peoples,
    handleLoadMore,
    liked,
    handleRemoveLike,
    handleSetLike,
    handleResetLikes,
  } = usePeople()
  const { goCharacter } = useNavigation()
  return (
    <SafeAreaView className={`flex-1 items-center flex-col gap-y-5 w-full`}>
      <Header title={text.homeCaps} />
      <CounterComponent liked={liked} resetLikes={handleResetLikes} />
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
              navigate={() => goCharacter(el.index + 1)}
            />
          )
        }}
        // eslint-disable-next-line react/no-unstable-nested-components
        ItemSeparatorComponent={() => <View className={'width-full h-3'} />}
        keyExtractor={(el, index) => el.url + el.created + index}
        onEndReached={handleLoadMore}
      />
    </SafeAreaView>
  )
}

export default HomeScreen
