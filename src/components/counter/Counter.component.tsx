import { View, Text } from 'react-native'
import { text } from '../../text/text'

interface IProps {
  liked: {
    url: string
    gender: string
  }[]
}
const CounterComponent = ({ liked }: IProps) => {
  return (
    <View className="w-full justify-start px-6">
      <Text>{[text.overallLikes, liked.length]}</Text>
      <Text>
        {[text.maleLiked, liked.filter(el => el.gender === 'male').length]}
      </Text>
      <Text>
        {[text.femaleLiked, liked.filter(el => el.gender === 'female').length]}
      </Text>
    </View>
  )
}

export default CounterComponent
