import { SafeAreaView } from "react-native"
import { Button, ScrollView, Text, YStack } from "tamagui"

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView flex={1}>
        <YStack p="$3">
          <Text>Active</Text>
          <Button size="$3" theme="active">
            Active
          </Button>
        </YStack>
      </ScrollView>
    </SafeAreaView>
  )
}
