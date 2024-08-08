// import '@i18n'
import RootRouter from './src/router/rootRouter'
import { StatusBar } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query'

const Root = () => {
  return (
    <>
      <RootRouter />
    </>
  )
}

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        keepPreviousData: true,
        refetchOnReconnect: true,
        cacheTime: Number.POSITIVE_INFINITY,
      },
    },
    queryCache: new QueryCache({
      onError: async (error: any, query) => {
        // 🎉 only show error if we already have data in the cache
        // which indicates a failed background update
        if (query.state.data !== undefined) {
          console.error(`Something went wrong: ${error.message}`)
        }
        if (error.response) {
          console.log(error.response.status, '🟡 query')
        }
      },
    }),
  })
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <StatusBar backgroundColor="transparent" translucent />
        <GestureHandlerRootView>
          <Root />
        </GestureHandlerRootView>
      </QueryClientProvider>
    </SafeAreaProvider>
  )
}

export default App
