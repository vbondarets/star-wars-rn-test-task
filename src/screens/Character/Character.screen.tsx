import { text } from '../../text/text'
import Header from '../../components/header/Header.component'
import { usePeople } from '../../hooks/people.hook'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import DefaultButton from '../../components/button/default-button.component'
import { useCallback, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { textStyles } from '../../styles/text.styles'

const CharacterScreen = () => {
  const { character, liked, handleRemoveLike, handleSetLike } = usePeople()
  const [isLiked, setIsLiked] = useState(false)
  useFocusEffect(
    useCallback(() => {
      setIsLiked(Boolean(liked.some(like => like.url === character?.url)))
    }, [liked, character]),
  )
  return (
    character && (
      <SafeAreaView className={`flex-1 items-start flex-col w-full px-6`}>
        <Header isGoBack={true} title={text.characterCaps} />
        <Text>{[text.name, character.name]}</Text>
        <Text>{[text.birthDate, character.birth_year]}</Text>
        <Text>{[text.gender, character.gender]}</Text>
        <Text>{[text.mass, character.mass]}</Text>
        <Text>{[text.hairColor, character.hair_color]}</Text>
        <Text>{[text.skinColor, character.skin_color]}</Text>
        <DefaultButton
          onPress={() =>
            isLiked ? handleRemoveLike(character) : handleSetLike(character)
          }
          styleClassName="mt-auto w-full rounded-full bg-black items-center justify-center h-14"
        >
          <Text className={`${textStyles.xxl} text-white`}>
            {isLiked ? text.removeFromLikedCaps : text.addToLikedCaps}
          </Text>
        </DefaultButton>
      </SafeAreaView>
    )
  )
}

export default CharacterScreen
