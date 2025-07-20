import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import type { LatLngExpression } from 'leaflet';



const MyMap = () => {

    const position: LatLngExpression = [-18.8792, 47.5079];
  return (
    <div className="rounded-xl overflow-hidden border-0 w-70 h-50">
      <MapContainer
        center={position}
        zoom={16}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%', backgroundColor: '#1c1c1b' }}
      >
        <TileLayer
          url="https://basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        />

        {/* claire */}
        {/* <TileLayer
  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  attribution='&copy; OpenStreetMap contributors'
/>
 */}

        <Marker position={position} />
      </MapContainer>
    </div>
  );
};

export default MyMap;
