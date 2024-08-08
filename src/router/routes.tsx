import { createStackNavigator } from '@react-navigation/stack'
import { RouterKeys } from './keys'
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import { RootStackParamList } from './route.type'

const Stack = createStackNavigator<RootStackParamList>()
export const publicRoutes = (
  <>
    <Stack.Screen
      options={{ headerShown: false }}
      name={RouterKeys.HOME}
      component={HomeScreen}
    />
  </>
)
