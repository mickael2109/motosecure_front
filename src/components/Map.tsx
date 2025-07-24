// import { MapContainer, TileLayer, Marker, Polyline, CircleMarker, useMap } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import type { LatLngExpression } from 'leaflet';
// import L from 'leaflet';
// import io from 'socket.io-client';
// import { useEffect, useState } from "react";
// import motoIconImg from '../assets/svg/moto.png';

// // 🧩 Socket setup
// const socket = io('https://mc-back.onrender.com', {
//   transports: ['websocket', 'polling'],
//   withCredentials: true,
// });

// // 📍 Custom Icon
// const motoIcon = new L.Icon({
//   iconUrl: motoIconImg,
//   iconSize: [40, 40],
//   iconAnchor: [20, 40],
//   popupAnchor: [0, -40],
// });

// // 🔁 Auto-fit map to positions
// const FitMapToBounds = ({ points }: { points: LatLngExpression[] }) => {
//   const map = useMap();
//   useEffect(() => {
//     if (points.length > 0) {
//       const bounds = L.latLngBounds(points);
//       map.fitBounds(bounds, { padding: [50, 50] });
//     }
//   }, [map, points]);
//   return null;
// };

// const MyMap = () => {
//   const [tileUrl, setTileUrl] = useState("");
//   const [vehiclePosition, setVehiclePosition] = useState<LatLngExpression>([-18.823707410254165, 47.55651565808284]);
//   const [route, setRoute] = useState<LatLngExpression[]>([]);
//   const [userPosition, setUserPosition] = useState<LatLngExpression | null>(null);

//   // const toggleMap = () => setIsMapVisible(prev => !prev);

//   useEffect(() => {
//     const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
//     setTileUrl(isDark
//       ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
//       : "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png");
//   }, []);

//   // 🚀 Socket for vehicle position
//   useEffect(() => {
//     socket.on('location', (socketValue) => {
//       const newPos: LatLngExpression = [socketValue.lat, socketValue.long];
//       setVehiclePosition(newPos);
//       setRoute(prev => [...prev, newPos]);
//     });

//     return () => {
//       socket.off('location');
//     };
//   }, []);

//   // 📍 Get user's position
//   useEffect(() => {
//     if ('geolocation' in navigator) {
//       navigator.geolocation.getCurrentPosition(
//         (pos) => {
//           const myPos: LatLngExpression = [pos.coords.latitude, pos.coords.longitude];
//           setUserPosition(myPos);
//           console.log("myPos: ", myPos);
          
//         },
//         (err) => {
//           console.error('Erreur géolocalisation :', err);
//         },
//         {
//           enableHighAccuracy: true,
//           timeout: 10000,
//           maximumAge: 0,
//         }
//       );
//     }
//   }, []);

//   const allPoints: LatLngExpression[] = [vehiclePosition, ...(userPosition ? [userPosition] : [])];

//   return (
//     <div  className='relative w-full h-full cursor-pointer'>
//       <MapContainer
//         center={vehiclePosition}
//         zoom={16}
//         scrollWheelZoom={true}
//         style={{ height: '100%', width: '100%'}}
//       >
//         {tileUrl && (
//           <TileLayer
//             url={tileUrl}
//             attribution={
//               tileUrl.includes("cartocdn")
//                 ? '&copy; <a href="https://carto.com/">CARTO</a>'
//                 : '&copy; OpenStreetMap contributors'
//             }
//           />
//         )}

//         {/* Ajuste la carte pour montrer toutes les positions */}
//         <FitMapToBounds points={allPoints} />

//         {/* 💡 Effet de lumière pour la moto */}
//         <CircleMarker
//           center={vehiclePosition}
//           radius={20}
//           pathOptions={{
//             color: '#00ffff',
//             fillColor: '#00ffff',
//             fillOpacity: 0.3,
//             opacity: 0.5,
//           }}
//         />

//         {/* 🏍️ Marqueur moto */}
//         <Marker position={vehiclePosition} icon={motoIcon} />

//         {/* 🛣️ Route */}
//         {route.length > 1 && (
//           <Polyline positions={route} pathOptions={{ color: '#2ffdb9', dashArray: '10' }} />
//         )}

//         {/* 🙋‍♂️ Position utilisateur */}
//         {userPosition && (
//           <>
//             <CircleMarker
//               center={userPosition}
//               radius={10}
//               pathOptions={{
//                 color: 'blue',
//                 fillColor: 'blue',
//                 fillOpacity: 0.3,
//               }}
//             />
//             <Marker position={userPosition}>
//             </Marker>
//           </>
//         )}
//       </MapContainer>
//     </div>
//   );
// };


// export default MyMap;



// import { MapContainer, TileLayer, Marker, Polyline, CircleMarker, useMap } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import type { LatLngExpression } from 'leaflet';
// import L from 'leaflet';
// import io from 'socket.io-client';
// import { useEffect, useState } from "react";
// import motoIconImg from '../assets/svg/moto.png';

// // 🧩 Socket setup
// const socket = io('https://mc-back.onrender.com', {
//   transports: ['websocket', 'polling'],
//   withCredentials: true,
// });

// // 📍 Custom Icon
// const motoIcon = new L.Icon({
//   iconUrl: motoIconImg,
//   iconSize: [40, 40],
//   iconAnchor: [20, 40],
//   popupAnchor: [0, -40],
// });

// // 🔁 Auto-fit map to positions
// const FitMapToBounds = ({ points }: { points: LatLngExpression[] }) => {
//   const map = useMap();
//   useEffect(() => {
//     if (points.length > 0) {
//       const bounds = L.latLngBounds(points);
//       map.fitBounds(bounds, { padding: [50, 50] });
//     }
//   }, [map, points]);
//   return null;
// };

// const MyMap = () => {
//   const [tileUrl, setTileUrl] = useState("");
//   const [vehiclePosition, setVehiclePosition] = useState<LatLngExpression>([-18.8237, 47.5565]);
//   const [route, setRoute] = useState<LatLngExpression[]>([]);
//   const [userPosition, setUserPosition] = useState<LatLngExpression | null>(null);

//   // const toggleMap = () => setIsMapVisible(prev => !prev);

//   useEffect(() => {
//     const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
//     setTileUrl(isDark
//       ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
//       : "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png");
//   }, []);

//   // 🚀 Socket for vehicle position
//   useEffect(() => {
//     socket.on('location', (socketValue) => {
//       const newPos: LatLngExpression = [socketValue.lat, socketValue.long];
//       setVehiclePosition(newPos);
//       setRoute(prev => [...prev, newPos]);
//     });

//     return () => {
//       socket.off('location');
//     };
//   }, []);

//   // 📍 Get user's position
//   useEffect(() => {
//     if ('geolocation' in navigator) {
//       navigator.geolocation.getCurrentPosition(
//         (pos) => {
//           const myPos: LatLngExpression = [pos.coords.latitude, pos.coords.longitude];
//           setUserPosition(myPos);
//         },
//         (err) => {
//           console.error('Erreur géolocalisation :', err);
//         },
//         {
//           enableHighAccuracy: true,
//           timeout: 10000,
//           maximumAge: 0,
//         }
//       );
//     }
//   }, []);

//   const allPoints: LatLngExpression[] = [vehiclePosition, ...(userPosition ? [userPosition] : [])];

//   return (
//     <div  className='relative w-full h-full cursor-pointer'>
//       <MapContainer
//         center={vehiclePosition}
//         zoom={16}
//         scrollWheelZoom={true}
//         style={{ height: '100%', width: '100%'}}
//       >
//         {tileUrl && (
//           <TileLayer
//             url={tileUrl}
//             attribution={
//               tileUrl.includes("cartocdn")
//                 ? '&copy; <a href="https://carto.com/">CARTO</a>'
//                 : '&copy; OpenStreetMap contributors'
//             }
//           />
//         )}

//         {/* Ajuste la carte pour montrer toutes les positions */}
//         <FitMapToBounds points={allPoints} />

//         {/* 💡 Effet de lumière pour la moto */}
//         <CircleMarker
//           center={vehiclePosition}
//           radius={20}
//           pathOptions={{
//             color: '#00ffff',
//             fillColor: '#00ffff',
//             fillOpacity: 0.3,
//             opacity: 0.5,
//           }}
//         />

//         {/* 🏍️ Marqueur moto */}
//         <Marker position={vehiclePosition} icon={motoIcon} />

//         {/* 🛣️ Route */}
//         {route.length > 1 && (
//           <Polyline positions={route} pathOptions={{ color: '#2ffdb9', dashArray: '10' }} />
//         )}

//         {/* 🙋‍♂️ Position utilisateur */}
//         {userPosition && (
//           <>
//             <CircleMarker
//               center={userPosition}
//               radius={10}
//               pathOptions={{
//                 color: 'blue',
//                 fillColor: 'blue',
//                 fillOpacity: 0.3,
//               }}
//             />
//             <Marker position={userPosition}>
//               {/* <Popup>📍 Vous êtes ici</Popup> */}
//             </Marker>
//           </>
//         )}
//       </MapContainer>
//     </div>
//   );
// };


// export default MyMap;

















// import {
//   MapContainer,
//   TileLayer,
//   Marker,
//   Polyline,
//   CircleMarker,
//   useMap,
// } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import type { LatLngExpression } from 'leaflet';
// import L from 'leaflet';
// import io from 'socket.io-client';
// import { useEffect, useRef, useState } from 'react';
// import motoIconImg from '../assets/svg/moto.png';

// const socket = io('https://mc-back.onrender.com', {
//   transports: ['websocket', 'polling'],
//   withCredentials: true,
// });

// const motoIcon = new L.Icon({
//   iconUrl: motoIconImg,
//   iconSize: [40, 40],
//   iconAnchor: [20, 40],
//   popupAnchor: [0, -40],
// });

// const MyMap = () => {
//   const mapRef = useRef<L.Map>(null);

//   const [tileUrl, setTileUrl] = useState('');
//   const [vehiclePosition, setVehiclePosition] = useState<LatLngExpression>([
//     -18.8237, 47.5565
//   ]);
//   const [route, setRoute] = useState<LatLngExpression[]>([]);
//   const [userPosition, setUserPosition] = useState<LatLngExpression | null>(null);

//   useEffect(() => {
//     const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//     setTileUrl(
//       isDark
//         ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
//         : 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
//     );
//   }, []);

//   useEffect(() => {
//     socket.on('location', (socketValue) => {
//       const newPos: LatLngExpression = [socketValue.lat, socketValue.long];
//       setVehiclePosition(newPos);
//       setRoute((prev) => [...prev, newPos]);
//     });

//     return () => {
//       socket.off('location');
//     };
//   }, []);

//   useEffect(() => {
//     if ('geolocation' in navigator) {
//       navigator.geolocation.getCurrentPosition(
//         (pos) => {
//           const myPos: LatLngExpression = [
//             pos.coords.latitude,
//             pos.coords.longitude,
//           ];
//           setUserPosition(myPos);
//         },
//         (err) => {
//           console.error('Erreur géolocalisation :', err);
//         },
//         {
//           enableHighAccuracy: true,
//           timeout: 10000,
//           maximumAge: 0,
//         }
//       );
//     }
//   }, []);

//   const handleZoomToAll = () => {
//     const map = mapRef.current;
//     if (!map) return;
//     const bounds = L.latLngBounds([vehiclePosition]);
//     if (userPosition) bounds.extend(userPosition);
//     map.fitBounds(bounds, { padding: [50, 50] });
//   };

//   const handleZoomToMoto = () => {
//     const map = mapRef.current;
//     if (!map) return;
//     map.setView(vehiclePosition, 18);
//   };

//   const handleZoomToMe = () => {
//     const map = mapRef.current;
//     if (!map || !userPosition) return;
//     map.setView(userPosition, 18);
//   };

//   return (
//     <div className='relative w-full h-full'>
//       <MapContainer
//         center={vehiclePosition}
//         zoom={16}
//         scrollWheelZoom={true}
//         style={{ height: '100%', width: '100%' }}
//         whenCreated={(mapInstance) => {
//           mapRef.current = mapInstance;
//         }}
//       >
//         {tileUrl && (
//           <TileLayer
//             url={tileUrl}
//             attribution={
//               tileUrl.includes('cartocdn')
//                 ? '&copy; <a href="https://carto.com/">CARTO</a>'
//                 : '&copy; OpenStreetMap contributors'
//             }
//           />
//         )}

//         <CircleMarker
//           center={vehiclePosition}
//           radius={20}
//           pathOptions={{
//             color: '#00ffff',
//             fillColor: '#00ffff',
//             fillOpacity: 0.3,
//             opacity: 0.5,
//           }}
//         />

//         <Marker position={vehiclePosition} icon={motoIcon} />

//         {route.length > 1 && (
//           <Polyline
//             positions={route}
//             pathOptions={{ color: '#2ffdb9', dashArray: '10' }}
//           />
//         )}

//         {userPosition && (
//           <>
//             <CircleMarker
//               center={userPosition}
//               radius={10}
//               pathOptions={{
//                 color: 'blue',
//                 fillColor: 'blue',
//                 fillOpacity: 0.3,
//               }}
//             />
//             <Marker position={userPosition}></Marker>
//           </>
//         )}
//       </MapContainer>

//       {/* Boutons de contrôle */}
//       <div className="absolute top-4 left-4 flex flex-col space-y-2 z-[1000]">
//         <button
//           onClick={handleZoomToAll}
//           className="dark:bg-white/10 shadow px-4 py-2 rounded"
//         >
//           Tout
//         </button>
//         <button
//           onClick={handleZoomToMoto}
//           className="dark:bg-white/10 shadow px-4 py-2 rounded "
//         >
//           Moto
//         </button>
//         <button
//           onClick={handleZoomToMe}
//           className="dark:bg-white/10 shadow px-4 py-2 rounded "
//         >
//           Moi
//         </button>
//       </div>
//     </div>
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

const MyMap = () => {
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
    <div onClick={toggleMap} className='relative w-full h-full cursor-pointer'>
      <MapContainer
        center={position}
        zoom={16}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}
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
