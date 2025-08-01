// import { MapContainer, TileLayer, Polyline } from 'react-leaflet';
// import Openrouteservice from 'openrouteservice-js';
// import { useEffect, useState } from 'react';
// import type { LatLngExpression } from 'leaflet';

// const ORS_API_KEY = 'eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6ImEzZjg4NjczNDM4ZDQwYTk5M2FhZjcyMmJlYmVlYmRhIiwiaCI6Im11cm11cjY0In0='; // à remplacer par ta clé

// const end = [47.55647918135085, -18.823777842685075]; // [lon, lat]
// const start   = [47.558489173847164, -18.890844605589468 ];


// interface MapProps {
//   page: string;
// }


// const MyMap: React.FC<MapProps> = ({ page }) => {
//   const [route, setRoute] = useState<LatLngExpression[]>([]);

//   useEffect(() => {
//     const dirs = new Openrouteservice.Directions({ api_key: ORS_API_KEY });
//     dirs.calculate({
//       coordinates: [start, end],
//       profile: 'driving-car',
//       format: 'geojson'
//     })
//     .then(res => {
//       const coords = res.features[0].geometry.coordinates as number[][];
//       const latlngs = coords.map(([lon, lat]) => [lat, lon]);

      
//       // Créer le contenu du fichier
//       const fileContent = latlngs
//         .map(coord => `{lat: ${coord[0]}, long: ${coord[1]}},`)
//         .join('\n');

//       // Créer un Blob et le déclencher pour téléchargementk
//       const blob = new Blob([fileContent], { type: 'text/plain' });
//       const url = URL.createObjectURL(blob);
//       const a = document.createElement('a');
//       a.href = url;
//       a.download = 'coordinates.txt';
//       a.click();
//       URL.revokeObjectURL(url);

//       setRoute(latlngs);
//       })
//     .catch(err => {
//       console.error("ORS routing error", err);
//     });
//   }, []);

//   // console.log("route : ",route);
  

//   return (
//     <MapContainer center={[start[1], start[0]]} zoom={13} style={{ width: '100%', height: '100%' }}>
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution="&copy; OpenStreetMap contributors"
//       />
//       {route.length > 0 && (
//         <Polyline positions={route} pathOptions={{ color: '#2ffdb9', weight: 5 }} />
//       )}
//     </MapContainer>
//   );
// };

// export default MyMap;



/**
 *  code 1
 */
import { MapContainer, TileLayer, Marker, useMap, Polyline, CircleMarker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import type { LatLngExpression } from 'leaflet';
import L from 'leaflet';
import io from 'socket.io-client';
import { useEffect, useState } from "react";
import motoIconImg from '../assets/svg/moto.png';

// 🧩 Socket setup
const socket = io('https://mc-back.onrender.com', {
  transports: ['websocket', 'polling'],
  withCredentials: true,
});

// 📍 Custom Icon
const motoIcon = new L.Icon({
  iconUrl: motoIconImg,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

// 🔁 Recenter map when position changes
const RecenterMap = ({ position }: { position: LatLngExpression }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(position);
  }, [position, map]);
  return null;
};

// 🔁 Invalidate map size on toggle
const ResizeMapOnToggle = ({ position, trigger }: { position: LatLngExpression, trigger: boolean }) => {
  const map = useMap();
  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
      map.setView(position);
    }, 100);
  }, [map, position, trigger]);
  return null;
};

interface MapProps {
  page: string;
}

const MyMap: React.FC<MapProps> = ({ page }) => {
  const [tileUrl, setTileUrl] = useState("");
  const [position, setPosition] = useState<LatLngExpression>([-18.823707410254165, 47.55651565808284]);
  const [route, setRoute] = useState<LatLngExpression[]>([]);
  const [isMapVisible, setIsMapVisible] = useState(false);


  const toggleMap = () => setIsMapVisible(prev => !prev);

  useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTileUrl(isDark
      ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      : "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png");
  }, []);

  useEffect(() => {
    socket.on('location', (socketValue) => {
      const newPos: LatLngExpression = [socketValue.lat, socketValue.long];
      setPosition(newPos);
      setRoute(prev => [...prev, newPos]);
    });

    return () => {
      socket.off('location');
    };
  }, []);


  return (
    <div onClick={toggleMap} className={`relative w-full h-full cursor-pointer ${page ==='home' && "rounded-full"}`}>
      <MapContainer
        center={position}
        zoom={16}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%', borderRadius: page === 'home' ? '50%' : '0' }}
      >
        {tileUrl && (
          <TileLayer
            url={tileUrl}
            attribution={
              tileUrl.includes("cartocdn")
                ? '&copy; <a href="https://carto.com/">CARTO</a>'
                : '&copy; OpenStreetMap contributors'
            }
          />
        )}

        <RecenterMap position={position} />
        <ResizeMapOnToggle position={position} trigger={isMapVisible} />

        <CircleMarker
          center={position}
          radius={20}
          pathOptions={{
            color: '#00ffff',
            fillColor: '#00ffff',
            fillOpacity: 0.3,
            opacity: 0.5,
          }}
        />

        <Marker position={position} icon={motoIcon} />

        {route.length > 1 && (
          <Polyline positions={route} pathOptions={{ color: '#2ffdb9', dashArray: '10' }} />
        )}


      </MapContainer>
    </div>
  );
};

export default MyMap;
