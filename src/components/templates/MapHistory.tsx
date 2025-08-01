import type { LatLngExpression } from 'leaflet';
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Polyline } from 'react-leaflet';

interface CoordonneInterface {
  lat: number;
  long: number;
}

const MapHistory: React.FC = () => {
  const coordonne: CoordonneInterface[] = [
    { lat: -18.890785, long: 47.558469 },
    { lat: -18.890814, long: 47.558372 },
    { lat: -18.890864, long: 47.55835 },
    { lat: -18.891343, long: 47.558378 },
    { lat: -18.89132, long: 47.558347 },
  ];

  const [route, setRoute] = useState<LatLngExpression[]>([]);
  const [start, setStart] = useState<LatLngExpression | null>(null);

  useEffect(() => {
    const newRoute = coordonne.map((c) => [c.lat, c.long] as LatLngExpression);
    setRoute(newRoute);

    if (coordonne.length > 0) {
      const firstPoint = coordonne[0];
      setStart([firstPoint.lat, firstPoint.long]);
    }
  }, []);

  return (
    <>
      {start && (
        <MapContainer center={start} zoom={17} style={{ width: '100%', height: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />

          {route.length > 0 && (
            <Polyline positions={route} pathOptions={{ color: '#2ffdb9' }} />
          )}
        </MapContainer>
      )}
    </>
  );
};

export default MapHistory;
