import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import type { LatLngExpression } from 'leaflet';
import L from 'leaflet';
import io from 'socket.io-client';
import { useEffect, useState } from "react";
import motoIconImg from '../assets/svg/moto.png';

const socket = io('https://mc-back.onrender.com', {
  transports: ['websocket', 'polling'],
  withCredentials: true,
});

// 📍 Icône personnalisée
const motoIcon = new L.Icon({
  iconUrl: motoIconImg,
  iconSize: [40, 40], // Taille en pixels
  iconAnchor: [20, 40], // Position de l'ancre
  popupAnchor: [0, -40], // Position du popup
});


// 🔁 Composant pour centrer dynamiquement la carte
const RecenterMap = ({ position }: { position: LatLngExpression }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(position);
  }, [position, map]);
  return null;
};

const MyMap = () => {
  const [tileUrl, setTileUrl] = useState("");
  const [position, setPosition] = useState<LatLngExpression>([-18.823707410254165, 47.55651565808284]);

  // 🎨 Mode sombre ou clair
  useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTileUrl(isDark
      ? "https://basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
  }, []);

  // 🔌 Réception des données socket
  useEffect(() => {
    socket.on('location', (socketValue) => {
      const newPos: LatLngExpression = [socketValue.lat, socketValue.long];
      setPosition(newPos);
    });

    return () => {
      socket.off('location');
    };
  }, []);

  return (
    <div className="rounded-xl overflow-hidden border-0 w-70 h-50">
      <MapContainer
        center={position}
        zoom={16}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%', backgroundColor: '#1c1c1b' }}
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

        {/* 🔁 Mise à jour de la position de la carte */}
        <RecenterMap position={position} />

        {/* 📍 Marqueur dynamique */}
        <Marker position={position} icon={motoIcon}/>
      </MapContainer>
    </div>
  );
};

export default MyMap;


// import { useEffect, useState } from "react";
// import { MapContainer, TileLayer } from "react-leaflet";

// export default function MyMap() {
//   const [tileUrl, setTileUrl] = useState("");

//   useEffect(() => {
//     const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
//     if (isDark) {
//       setTileUrl("https://basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png");
//     } else {
//             tileUrl.includes("cartocdn")
//               ? '&copy; <a href="https://carto.com/">CARTO</a>'
//               : '&copy; OpenStreetMap contributors'
//           }
//         />
//       )}
//     </MapContainer>
//   );
// }

//       setTileUrl("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
//     }
//   }, []);

//   return (
//     <MapContainer center={[0, 0]} zoom={2} className="h-screen w-full">
//       {tileUrl && (
//         <TileLayer
//           url={tileUrl}
//           attribution={
//             tileUrl.includes("cartocdn")
//               ? '&copy; <a href="https://carto.com/">CARTO</a>'
//               : '&copy; OpenStreetMap contributors'
//           }
//         />
//       )}
//     </MapContainer>
//   );
// }
