import { GiFullMotorcycleHelmet } from "react-icons/gi";
import MapHistory from "../../../components/templates/MapHistory";
import { CgDanger } from "react-icons/cg";
import { useEffect, useRef, useState } from "react";

import { useSelector } from "react-redux";
import { selectCoordinateHisto } from "../../../features/coordinate/selectors";
import HistoryCoordinateItem from "../../../components/organisms/HistoryCoordinateItem";

import { parseDateKey } from "../../../utils/convertDate";
import type { CoordinateHistoryMap } from "../../../types/CoordinateInterface";
import { selectAllMotoUser } from "../../../features/moto/selectors";


const History = () => {

    const containerRef = useRef<HTMLDivElement | null>(null);
    const [selectHistory, setSelectHistory] = useState(false)
    const moto = useSelector(selectAllMotoUser);
    const coordinateHisto = useSelector(selectCoordinateHisto)
   
    const [histoSelect, setHistoSelect] = useState("");

    // Trier d'abord les données
    const sortedCoordinateHisto = Object.entries(coordinateHisto ?? {})
    .sort(([keyA], [keyB]) => {
        const dateA = parseDateKey(keyA);
        const dateB = parseDateKey(keyB);
        return dateB.getTime() - dateA.getTime();
    })
    .reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
    }, {} as CoordinateHistoryMap);

    

    // Initialiser histoSelect avec la première clé triée
    useEffect(() => {
    const firstKey = Object.keys(sortedCoordinateHisto)[0];
    if (firstKey && histoSelect === "") {
        setHistoSelect(firstKey);
    }
    }, [sortedCoordinateHisto, histoSelect]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setSelectHistory(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

   

    if (sortedCoordinateHisto[histoSelect] === undefined) {
        return (
             <div className="flex w-52 flex-col gap-4">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
            </div>
        )
    }

    

     console.log("sortedCoordinateHisto: ",sortedCoordinateHisto[Object.keys(sortedCoordinateHisto)[0]]);

    
    

    return (
        <div className="">
            <div 
                className="fixed w-full h-screen "
                ref={containerRef}
                onClick={() => setSelectHistory(true)}
            >
                <MapHistory coordonne={sortedCoordinateHisto[histoSelect].coord} />
            </div>

            {/* info */}
            <div className={`fixed bottom-0 w-full ${selectHistory ? "h-[30vh]" : "h-[50vh]"} transition-all duration-500 ease-in-out  bg-black/60 backdrop-blur-[2px] rounded-t-4xl p-4`}>
                <span className="font-bold">History</span>

                <div className="flex flex-col gap-1 overflow-y-scroll overflow-hidden max-h-[45vh]">

              
                    {
                        Object.entries(sortedCoordinateHisto).map(([dateLabel, items]) => (
                            <div key={dateLabel} className="flex flex-col gap-2" onClick={() => setHistoSelect(dateLabel)}>
                                <div className="flex flex-col gap-2">
                                        <HistoryCoordinateItem >
                                            <div className={`flex flex-row justify-between  p-2 rounded-2xl ${histoSelect === dateLabel ? "bg-second_mc/60": "bg-second_mc/10"}`}>
                                                <div className="flex flex-row justify-start items-center gap-4">
                                                    <div>
                                                        <i className="text-4xl"><GiFullMotorcycleHelmet /></i>
                                                    </div>
                                                    <div>
                                                        <div><span className="text-[14px]">{moto[0].pseudo}</span></div>
                                                        <div><span className="text-[12px]">{items.data.km} km</span></div>
                                                    </div>
                                                </div>
                                                <div className="text-[12px] flex flex-col items-center justify-center">
                                                    <div>{dateLabel}</div>
                                                    <div><i className="text-yellow-500"><CgDanger /></i></div>
                                                </div>
                                            </div>
                                        </HistoryCoordinateItem>
                                </div>
                            </div>
                        ))
                    }

                       
               
                </div>

               
            </div>
      </div>
    )
}

export default History;