import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import type { LatLngExpression } from 'leaflet';

import { useEffect, useState } from "react";


const MyMap = () => {

  const [tileUrl, setTileUrl] = useState("");

  useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (isDark) {
      setTileUrl("https://basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png");
    } else {
      setTileUrl("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
    }
  }, []);

  const position: LatLngExpression = [-18.8792, 47.5079];

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

        {/* <TileLayer
          url="https://basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        /> */}

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
