import { Stack } from 'expo-router'
import { StatusBar } from 'react-native'
import BackButton from '@/components/ui/back-button'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { HeroUINativeProviderRaw } from 'heroui-native/provider-raw'
import { ToastProvider } from 'heroui-native/toast'
import '../global.css'

export { ErrorBoundary } from 'expo-router'

function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <HeroUINativeProviderRaw>
        <StatusBar barStyle="light-content" />
        <ToastProvider>
          <RootNavigator />
        </ToastProvider>
      </HeroUINativeProviderRaw>
    </GestureHandlerRootView>
  )
}

function RootNavigator() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'black',
        },
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: 'white',
        headerLeft: BackButton,
      }}
    >
      <Stack.Screen name="(app)" />
    </Stack>
  )
}

export default RootLayout
