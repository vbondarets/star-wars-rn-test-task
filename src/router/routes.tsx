import { createStackNavigator } from '@react-navigation/stack'
import { RouterKeys } from './keys'
import HomeScreen from '../screens/Home/Home.screen'
import { RootStackParamList } from './route.type'
import CharacterScreen from '../screens/Character/Character.screen'

const Stack = createStackNavigator<RootStackParamList>()
export const publicRoutes = (
  <>
    <Stack.Screen
      options={{ headerShown: false }}
      name={RouterKeys.HOME}
      component={HomeScreen}
    />
    <Stack.Screen
      options={{ headerShown: false }}
      name={RouterKeys.CHARACTER}
      component={CharacterScreen}
    />
  </>
)
