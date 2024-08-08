/**
 * @format
 */

import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'

// eslint-disable-next-line func-style
function HeadlessCheck({ isHeadless }) {
  if (isHeadless) {
    // app has been launched in the background by iOS, ignore
    return null
  }

  return <App />
}

AppRegistry.registerComponent(appName, () => HeadlessCheck)
