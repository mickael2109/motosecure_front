import { CgDanger } from "react-icons/cg";
import { truncateToWords } from "../../utils/truncateToWords";
import { formatDate } from "../../utils/convertDate";


interface notificationProps {
  title: string;
  description: string
  date: string
}


const HistoryCard: React.FC<notificationProps> = ({ title, description, date }) => {

  return (
     <div
        className="flex flex-row justify-between gap-6 items-center rounded-2xl dark:bg-white/10 bg-black/10 backdrop-blur-xl p-4 w-full"
      >
        <div className="flex flex-row justify-start gap-3 items-center">
          <div className='lex flex-row items-center justify-center'>
            <i className='text-2xl text-red-500'><CgDanger /></i>
          </div>
          <div className='flex flex-col justify-between'>
            <div><span className="text-[13px]">{title}</span></div>
            <div className='text-[12px]'>{truncateToWords(description, 8)}</div>
          </div>
        </div>
        <div> <span className='text-[10px] opacity-80'>{formatDate(date)}</span></div>
      </div>
  );
};

export default HistoryCard