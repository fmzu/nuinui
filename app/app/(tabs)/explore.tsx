import { StyleSheet } from "react-native"
import MapView, { Marker } from "react-native-maps"

export default function TabTwoScreen() {
  return (
    <MapView
      initialRegion={{
        latitude: 35.60632361958456,
        longitude: 139.67891447723446,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      style={styles.map}
    >
      <Marker
        coordinate={{
          latitude: 35.60632361958456,
          longitude: 139.67891447723446,
        }}
        title="緑ヶ丘"
        description="緑ヶ丘の説明"
      />
    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})
