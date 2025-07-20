import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import type { LatLngExpression } from 'leaflet';



const MyMap = () => {

    const position: LatLngExpression = [-18.8792, 47.5079];
  return (
    <div className="rounded-xl overflow-hidden border-0 w-70 h-50">
      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%', backgroundColor: '#1c1c1b' }}
      >
        <TileLayer
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        />
        <Marker position={position} />
      </MapContainer>
    </div>
  );
};

export default MyMap;
