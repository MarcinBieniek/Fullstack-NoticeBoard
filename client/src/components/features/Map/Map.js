import styles from './Map.module.scss';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import MarkerClusterGroup from 'react-leaflet-cluster';
import {getAllNotices} from '../../../redux/noticesReducer';
import { useSelector } from 'react-redux';
import { IMGS_URL } from '../../../configs/config';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

const Map = () => {

  const notices = useSelector(state => getAllNotices(state));

  const customIcon = new Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/2776/2776067.png',
    iconSize: (40, 40),
  })
  
  return (
    <div className={styles.map}>
      <MapContainer 
        center={[52.4976443, 13.411914]}
        zoom={13}  
      >
        <TileLayer 
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MarkerClusterGroup
          chunkedLoading
        >
          {notices.map((marker) => {

            const stringToArray = marker.map.split(" ", 2);
            const arrOfNum = stringToArray.map(str => {
              return Number(str)
            })

            return (

            <Marker 
              position={arrOfNum}
              icon={customIcon}
            >
              <Popup className={styles.popup} maxWidth="100" maxHeight="auto">
                <img src={`${IMGS_URL}/${marker.photo}`} alt="Main image"/>  
                <span className={styles.price}>Price: {marker.price}€</span><br/>
                <Link to={`/notice/${marker._id}`} className={styles.link}>
                  See details 
                  <SearchIcon className={styles.icon}/>
                </Link>
              </Popup>
            </Marker>
          )})}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  )
}

export default Map
