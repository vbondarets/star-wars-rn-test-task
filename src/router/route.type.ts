import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types'
import { RouterKeys } from './keys'

export type RootStackParamList = {
  [RouterKeys.HOME]: undefined
  [RouterKeys.CHARACTER]: undefined
}

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>
