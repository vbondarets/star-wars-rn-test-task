import { Alert } from 'react-native'
import { text } from '../text/text'

export const getError = (error: any, message?: string, title?: string) => {
  const messages = error.response.data.message
  const currentMessage = Array.isArray(messages)
    ? messages.join(', ')
    : messages

  message
    ? Alert.alert(title ?? text.error, message)
    : Alert.alert(title ?? text.error, currentMessage)
}
