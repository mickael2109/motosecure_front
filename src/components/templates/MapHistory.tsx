import type { LatLngExpression } from 'leaflet';
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Polyline } from 'react-leaflet';
import type { CoordinateInterface } from '../../types/CoordinateInterface';
import { useMap } from 'react-leaflet';
import type { LatLngBoundsExpression } from 'leaflet';

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


const MapHistory: React.FC<MapProps> = ({coordonne}) => {

  

  const [route, setRoute] = useState<LatLngExpression[]>([]);
  const [start, setStart] = useState<LatLngExpression | null>(null);

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
