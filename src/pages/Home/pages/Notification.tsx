import { MdKeyboardReturn } from "react-icons/md";
import { BsFilterLeft } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import HistoryCard from "../../../components/organisms/HistoryCard";

const Notification = () => {
    return (
        <div className="relative min-h-screen bg-cover bg-center p-6 dark:bg-gradient-to-b from-transparent to-second_mc/30">
           <div className="flex flex-row items-center justify-between bg-transparent ">
                <div className="flex flex-row justify-start gap-2 items-center">
                    <div><NavLink to="/home"><i className="text-2xl opacity-60"><MdKeyboardReturn></MdKeyboardReturn></i></NavLink></div>
                    <div><span className="capitalize text-2xl opacity-70 font-bold">notifications</span></div>
                </div>
                <div><i className="text-2xl opacity-60"><BsFilterLeft /></i></div>
           </div>

           <div className="flex flex-col gap-2 mt-2 h-[90vh] overflow-y-scroll overflow-hidden">
                <div>
                    <div><span>Aujourd'hui</span></div>
                    <div className="flex flex-col justify-center items-center gap-1">
                        <HistoryCard></HistoryCard>
                        {/* <HistoryCard></HistoryCard>
                        <HistoryCard></HistoryCard>
                        <HistoryCard></HistoryCard>
                        <HistoryCard></HistoryCard>
                        <HistoryCard></HistoryCard>
                        <HistoryCard></HistoryCard>
                        <HistoryCard></HistoryCard>
                        <HistoryCard></HistoryCard>
                        <HistoryCard></HistoryCard>
                        <HistoryCard></HistoryCard>
                        <HistoryCard></HistoryCard>
                        <HistoryCard></HistoryCard> */}
                    </div>
                </div>
           </div>
        </div>
    );
}

export default Notification;
