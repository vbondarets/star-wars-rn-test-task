import { View, Text } from 'react-native'
import { text } from '../../text/text'
import DefaultButton from '../../components/button/default-button.component'
import { textStyles } from '../../styles/text.styles'

interface IProps {
  liked: {
    url: string
    gender: string
  }[]
  resetLikes: () => void
}
const CounterComponent = ({ liked, resetLikes }: IProps) => {
  return (
    <View className="w-full justify-start px-6 gap-y-3">
      <DefaultButton
        onPress={resetLikes}
        styleClassName="h-8 bg-black rounded-full w-fit justify-center items-center w-16"
      >
        <Text className={`${textStyles.sm} text-white`}>{text.reset}</Text>
      </DefaultButton>
      <View>
        <Text>{[text.overallLikes, liked.length]}</Text>
        <Text>
          {[text.maleLiked, liked.filter(el => el.gender === 'male').length]}
        </Text>
        <Text>
          {[
            text.femaleLiked,
            liked.filter(el => el.gender === 'female').length,
          ]}
        </Text>
      </View>
    </View>
  )
}

export default CounterComponent
