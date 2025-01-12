import { SafeAreaView } from "react-native"
import {
  Button,
  Card,
  Circle,
  H1,
  Image,
  ScrollView,
  Text,
  XStack,
  YStack,
} from "tamagui"

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView flex={1}>
        <YStack p="$3">
          <Card elevate bordered>
            <Card.Header padded>
              <XStack alignItems="center" space="$2">
                <Circle size={"$3"} backgroundColor="$color" />
                <H1 size={"$6"}>みみっち</H1>
              </XStack>
            </Card.Header>
            <Image
              // ここのwidth, heightは指定しないと表示されない（実際の画像の高さなため、DB追加時に高さなど保存しとく）
              source={{
                uri: "https://toy.bandai.co.jp/assets/tamagotchi/images/smart/character/37/character.png",
                height: 350,
              }}
              flex={1}
              borderWidth="$1"
              objectFit="cover"
            />
            <YStack p="$3">
              <Text>
                みみっちは、おとなしくて、おしゃべりが犬好きなキャラクターです。
              </Text>
            </YStack>
            <Card.Footer padded>
              <XStack flex={1} />
              <Button borderRadius="$10">Purchase</Button>
            </Card.Footer>
          </Card>
        </YStack>
      </ScrollView>
    </SafeAreaView>
  )
}
