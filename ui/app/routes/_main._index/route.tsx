import type { MetaFunction } from "@remix-run/node"
import {
  APIProvider,
  Map as GoogleMap,
  InfoWindow,
  Marker,
} from "@vis.gl/react-google-maps"
import { useRef, useState } from "react"
import { adress } from "~/lib/tokyo"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

// const API_KEY = process.env.GOOGLE_MAPS_API_KEY
// console.log("O", API_KEY)

// if (API_KEY === undefined) {
//   throw new Error("GOOGLE_MAPS_API_KEY is not defined")
// }

export default function Route() {
  const [infoWindowShown, setInfoWindowShown] = useState(null)
  const markerRefs = useRef([])

  // マーカークリック時のハンドラ
  const handleMarkerClick = (index) => {
    setInfoWindowShown(index)
  }

  // 情報ウィンドウを閉じるハンドラ
  const handleClose = () => {
    setInfoWindowShown(null)
  }

  return (
    <div className="p-4">
      <p>{"nuinui"}</p>
      <APIProvider apiKey={""}>
        <GoogleMap
          style={{ height: "100vh" }}
          defaultCenter={{ lat: 35.67907222245488, lng: 139.75969871994417 }}
          defaultZoom={5}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
        >
          {adress.map((pos, i) => (
            <Marker
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={i}
              ref={(el) => (markerRefs.current[i] = el)}
              position={{ lat: pos.latitude, lng: pos.longitude }}
              onClick={() => handleMarkerClick(i)}
            />
          ))}
          {adress.map(
            (pos, i) =>
              infoWindowShown === i && (
                <InfoWindow
                  key={i}
                  anchor={markerRefs.current[i]}
                  onClose={handleClose}
                >
                  <h2 className="font-bold text-lg">{pos.store}</h2>
                  <p>{pos.address}</p>
                  <a href="/">リンク</a>
                </InfoWindow>
              ),
          )}
        </GoogleMap>
      </APIProvider>
    </div>
  )
}
