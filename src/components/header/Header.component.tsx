import { View, Text } from 'react-native'
import { textStyles } from '../../styles/text.styles'

interface IProps {
  title?: string
}

const Header = ({ title }: IProps) => {
  return (
    <View className="h-16 w-full flex relative z-50">
      {title && <Text className={`m-auto ${textStyles.base}`}>{title}</Text>}
    </View>
  )
}

export default Header
