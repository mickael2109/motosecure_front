import { MdKeyboardReturn } from "react-icons/md";
import { BsFilterLeft } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import HistoryCard from "../../../components/organisms/HistoryCard";
import { useSelector } from "react-redux";
import { selectAllNotificationUser } from "../../../features/notification/selectors";

const Notification = () => {

    const notification = useSelector(selectAllNotificationUser);
    

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
            
                    <div className="flex flex-col justify-center items-center gap-1 mt-4">
                       {
                            notification.length > 0 ? (
                                notification.map((items, index) => (
                                    <HistoryCard key={index} title={items.title} description={items.description} date={items.createdAt}></HistoryCard>
                                ))
                            ) : (
                                <div>Aucune notification</div>
                            )
                        }
                        
                    </div>
               
           </div>
        </div>
    );
}

export default Notification;
