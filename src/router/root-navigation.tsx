import { createNavigationContainerRef } from '@react-navigation/native'
import { RootStackParamList } from './route.type'

export const navigationRef = createNavigationContainerRef<RootStackParamList>()

// eslint-disable-next-line func-style
export function navigate<RouteName extends keyof RootStackParamList>(
  ...args: RouteName extends unknown
    ? undefined extends RootStackParamList[RouteName]
      ?
          | [screen: RouteName]
          | [screen: RouteName, params: RootStackParamList[RouteName]]
      : [screen: RouteName, params: RootStackParamList[RouteName]]
    : never
) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(...args)
  }
}
