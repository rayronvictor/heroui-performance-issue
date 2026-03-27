import { Stack } from 'expo-router'
import { StatusBar } from 'react-native'
import BackButton from '@/components/ui/back-button'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { HeroUINativeProviderRaw } from 'heroui-native/provider-raw'
import { ToastProvider } from 'heroui-native/toast'
import '../global.css'
import { TitleMenuProvider } from '@/components/title-menu/provider'
import { TitleMenu } from '@/components/title-menu'

export { ErrorBoundary } from 'expo-router'

function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <HeroUINativeProviderRaw>
        <StatusBar barStyle="light-content" />
        <ToastProvider>
          <TitleMenuProvider>
            <RootNavigator />
            <TitleMenu presentation="bottom-sheet" />
          </TitleMenuProvider>
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
