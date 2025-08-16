import type { LatLngExpression } from 'leaflet';
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import type { CoordinateInterface } from '../../types/CoordinateInterface';
import { useMap } from 'react-leaflet';
import type { LatLngBoundsExpression } from 'leaflet';
import L from 'leaflet';
import motoIconImg from '../../assets/svg/moto.png';
import { useSelector } from 'react-redux';
import { selectAllMotoUser } from '../../features/moto/selectors';
interface FitMapToRouteProps {
  positions: LatLngExpression[];
}

const FitMapToRoute: React.FC<FitMapToRouteProps> = ({ positions }) => {
  const map = useMap();

  useEffect(() => {
    if (positions.length > 0) {
      map.fitBounds(positions as LatLngBoundsExpression, {
        padding: [30, 30], // optionnel pour ne pas coller les bords
      });
    }
  }, [positions, map]);

  return null;
};



interface MapProps {
  coordonne: CoordinateInterface[];
}


// 📍 Custom Icon
const motoIcon = new L.Icon({
  iconUrl: motoIconImg,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});


const MapHistory: React.FC<MapProps> = ({coordonne}) => {

  

  const [route, setRoute] = useState<LatLngExpression[]>([]);
  const [start, setStart] = useState<LatLngExpression | null>(null);
  const moto = useSelector(selectAllMotoUser);

  useEffect(() => {
    const newRoute = coordonne.map((c) => [c.lat, c.long] as LatLngExpression);
    setRoute(newRoute);

    if (coordonne.length > 0) {
      const firstPoint = coordonne[0];
      setStart([firstPoint.lat, firstPoint.long]);
    }
  }, [coordonne]);

  return (
    <>
      {start && (
        <MapContainer center={start} zoom={17} style={{ width: '100%', height: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />

          <Marker position={[moto[0].lat, moto[0].long]} icon={motoIcon} />

          {route.length > 0 && (
            <>
              <Polyline positions={route} pathOptions={{ color: '#2ffdb9' }} />
              <FitMapToRoute positions={route} />
            </>
          )}
        </MapContainer>

      )}
    </>
  );
};

export default MapHistory;
