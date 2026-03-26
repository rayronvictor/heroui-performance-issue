import { Stack } from 'expo-router'
import BackButton from '@/components/ui/back-button'
import { PortalHost } from 'heroui-native/portal'
import { useThemeColor } from 'heroui-native'

export default function AppLayout() {
  const surfaceColor = useThemeColor('surface')

  return (
    <>
      <Stack
        screenOptions={{
          contentStyle: {
            backgroundColor: 'black',
          },
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: surfaceColor,
          },
          headerTintColor: 'white',
          headerLeft: BackButton,
        }}
      >
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false, animation: 'none' }}
        />
      </Stack>
      <PortalHost />
    </>
  )
}
