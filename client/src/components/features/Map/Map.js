import styles from './Map.module.scss';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import MarkerClusterGroup from 'react-leaflet-cluster';

const Map = () => {

  const markers = [
    {
      geocode: [52.520008, 13.404954],
      popup: "Hello, popup1"
    },
    {
      geocode: [52.530007, 13.404954],
      popup: "Hello, popup1"
    },
    {
      geocode: [52.520006, 13.414954],
      popup: "Hello, popup1"
    } 
  ]

  const customIcon = new Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/2776/2776067.png',
    iconSize: (40, 40),
  })
  
  return (
    <div className={styles.map}>
      <MapContainer 
        center={[52.520008, 13.404954]}
        zoom={13}  
      >
        <TileLayer 
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MarkerClusterGroup
          chunkedLoading
        >
          {markers.map(marker => (
            <Marker 
              position={marker.geocode}
              icon={customIcon}
            >
              <Popup>{marker.popup}</Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  )
}

export default Map
