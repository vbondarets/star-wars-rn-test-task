/* eslint-disable react/self-closing-comp */
import { View, Text } from 'react-native'
import { textStyles } from '../../styles/text.styles'
import DefaultButton from '../../components/button/default-button.component'
import { useNavigation } from '../../hooks/navigation.hook'
import getIcon from '../../utils/get-icon.util'
import { IconEnum } from '../../types/icon.type'

interface IProps {
  title?: string
  isGoBack?: boolean
}

const Header = ({ title, isGoBack }: IProps) => {
  const { goBack } = useNavigation()
  const BackArrow = getIcon(IconEnum.LEFT_ARROW)
  return (
    <View className="h-16 w-full flex-row justify-between items-center">
      {isGoBack && (
        <DefaultButton
          onPress={goBack}
          styleClassName="w-4 h-4 rounded-full items-center justify-center"
        >
          <BackArrow />
        </DefaultButton>
      )}
      {title && <Text className={`m-auto ${textStyles.base}`}>{title}</Text>}
      <View className="placeholder w-4"></View>
    </View>
  )
}

export default Header
