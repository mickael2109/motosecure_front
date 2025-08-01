import { GiFullMotorcycleHelmet } from "react-icons/gi";
import MapHistory from "../../../components/templates/MapHistory";
import { CgDanger } from "react-icons/cg";
import { useEffect, useRef, useState } from "react";

import { useSelector } from "react-redux";
import { selectCoordinate } from "../../../features/coordinate/selectors";
import HistoryItem from "../../../components/organisms/HistoryItem";

import { format, isToday, isYesterday, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';

const History = () => {

    const containerRef = useRef<HTMLDivElement | null>(null);
    const [selectHistory, setSelectHistory] = useState(false)
    const coordinate = useSelector(selectCoordinate);


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

    // const coordinate = useSelector(selectCoordinate);

    const sortedHistorique = [...coordinate].sort((a, b) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(); 
    });

    const groupedCoordinate = sortedHistorique.reduce((acc, item) => {
        const date = parseISO(item.createdAt);
        
        let key = '';
        if (isToday(date)) key = "Aujourd'hui";
        else if (isYesterday(date)) key = "Hier";
        else key = format(date, 'dd/MM/yyyy', { locale: fr });

        if (!acc[key]) acc[key] = [];
        acc[key].push(item);

        return acc;
    }, {} as Record<string, typeof coordinate>);

    return (
        <div className="">
            <div 
                className="fixed w-full h-screen "
                ref={containerRef}
                onClick={() => setSelectHistory(true)}
            ><MapHistory /></div>

            {/* info */}
            <div className={`fixed bottom-0 w-full ${selectHistory ? "h-[30vh]" : "h-[50vh]"} transition-all duration-500 ease-in-out  bg-black/60 backdrop-blur-[2px] rounded-t-4xl p-4`}>
                <span className="font-bold">History</span>

                <div className="flex flex-col gap-1 overflow-y-scroll overflow-hidden max-h-[45vh]">

                {
                    coordinate.length > 0 ? (
                        <>
                            {
                                Object.entries(groupedCoordinate).map(([dateLabel, items]) => (
                                    <div key={dateLabel} className="flex flex-col gap-2">
                                        <div><span className="text-[12px] opacity-60">{dateLabel}</span></div>

                                        <div className="flex flex-col gap-2">
                                        {items.map((item, index) => (
                                            <HistoryItem key={index}>
                                                <div className="flex flex-row justify-between bg-second_mc/10 p-2 rounded-2xl">
                                                    <div className="flex flex-row justify-start items-center gap-4">
                                                        <div>
                                                            <i className="text-4xl"><GiFullMotorcycleHelmet /></i>
                                                        </div>
                                                        <div>
                                                            <div><span className="text-[14px]">{item.long}</span></div>
                                                            <div><span className="text-[12px]">1 aout 2025</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="text-[12px] flex flex-col items-center justify-center">
                                                        <div>30 km</div>
                                                        <div><i className="text-yellow-500"><CgDanger /></i></div>
                                                    </div>
                                                </div>
                                            </HistoryItem>
                                        ))}
                                        </div>
                                    </div>
                                ))
                            }

                        </>
                    ):
                    (
                        <div className="text-center opacity-60 text-[12px]">Aucun historique</div>
                    )
                }
               
                </div>

               
            </div>
      </div>
    )
}

export default History;