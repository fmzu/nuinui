import { Colors } from "@/constants/Colors"
import { useColorScheme } from "@/hooks/useColorScheme"
import { Home, Map as MapIcon } from "@tamagui/lucide-icons"
import { Tabs } from "expo-router"

export default function TabLayout() {
  const colorScheme = useColorScheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "タイムライン",
          headerShown: true,
          title: "Home",
          tabBarIcon: ({ color }) => <Home size="$1" color={color} />,
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          headerTitle: "マップ",
          headerShown: true,
          title: "Map",
          tabBarIcon: ({ color }) => <MapIcon size="$1" color={color} />,
        }}
      />
    </Tabs>
  )
}
