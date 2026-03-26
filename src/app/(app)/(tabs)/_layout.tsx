import { MaterialIcons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import { useThemeColor } from 'heroui-native'

export default function TabLayout() {
  const surfaceColor = useThemeColor('surface')
  const accentColor = useThemeColor('accent')

  return (
    <Tabs
      screenOptions={{
        sceneStyle: {
          backgroundColor: 'black',
        },
        tabBarActiveTintColor: accentColor,
        tabBarLabelStyle: {
          fontSize: 10,
        },

        tabBarStyle: {
          backgroundColor: surfaceColor,
          borderTopWidth: 0,
        },
        // headerShown: false,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: surfaceColor,
        },
        headerTintColor: 'white',
        headerBackButtonDisplayMode: 'minimal',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={26} name="home" color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
