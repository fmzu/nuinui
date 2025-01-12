import { StyleSheet } from "react-native"
import MapView, { Marker } from "react-native-maps"

export default function TabTwoScreen() {
  const a = [
    {
      title: "渋谷",
      latitude: 35.658765710869616,
      longitude: 139.70189324577797,
    },
    {
      title: "新宿",
      latitude: 35.69014957167475,
      longitude: 139.70053262250886,
    },
    {
      title: "池袋",
      latitude: 35.730303629823915,
      longitude: 139.71064256170928,
    },
    {
      title: "横浜",
      latitude: 35.46671466876042,
      longitude: 139.62184737690004,
    },
  ]

  return (
    <MapView
      initialRegion={{
        latitude: 35.658765710869616,
        longitude: 139.70189324577797,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      style={styles.map}
    >
      {a.map((v) => (
        <Marker
          key={v.title}
          coordinate={{
            latitude: v.latitude,
            longitude: v.longitude,
          }}
          title={v.title}
          description={`${v.title}の説明`}
        />
      ))}
      {/* <Marker
        coordinate={{
          latitude: 35.60632361958456,
          longitude: 139.67891447723446,
        }}
        title="緑ヶ丘"
        description="緑ヶ丘の説明"
      /> */}
    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})
