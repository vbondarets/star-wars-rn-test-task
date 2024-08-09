import { View, Text, TouchableOpacity } from 'react-native'
import { ICharacter } from 'types/character.type'
import getIcon from '../../utils/get-icon.util'
import { IconEnum } from '../../types/icon.type'

interface IProps {
  character: ICharacter
  isLiked?: boolean
  handleLike: (character: ICharacter) => void
}
const CharacterComponent = ({ character, isLiked, handleLike }: IProps) => {
  const UserIcon = getIcon(IconEnum.USER)
  const LikeIcon = getIcon(IconEnum.LIKE)
  return (
    <View className="w-full h-fit p-4 shadow-sm bg-white rounded-md flex-row justify-between items-center">
      <View className="p-2 h-10 w-10 bg-slate-400 rounded-full justify-center items-center">
        <UserIcon width={24} height={24} />
      </View>
      <View className="flex-1 px-4">
        <Text>{character.name}</Text>
        <Text>{character.gender}</Text>
        <Text>{character.birth_year}</Text>
      </View>
      <TouchableOpacity
        onPress={() => handleLike(character)}
        className={`w-fit h-fit p-4 ${
          isLiked && 'border-2 border-solid border-black rounded-full'
        }`}
      >
        <LikeIcon
          width={24}
          height={24}
          stroke={'transparent'}
          fill={'transparent'}
        />
      </TouchableOpacity>
    </View>
  )
}

export default CharacterComponent
