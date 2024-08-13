import { createStackNavigator } from '@react-navigation/stack'
import { RootStackParamList } from './route.type'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { navigationRef } from './root-navigation'
import { publicRoutes } from './routes'

const Stack = createStackNavigator<RootStackParamList>()

const RootRouter = () => {
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={{
        ...DefaultTheme,
        colors: { ...DefaultTheme.colors, background: '#fff' },
      }}
    >
      <Stack.Navigator>{publicRoutes}</Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootRouter
