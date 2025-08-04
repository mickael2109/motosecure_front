import { CgDanger } from "react-icons/cg";
import { truncateToWords } from "../../utils/truncateToWords";
import { FaTrashRestoreAlt } from "react-icons/fa";

const HistoryCard = () => {

  return (
     <div
        className="flex flex-row justify-start gap-6 items-center rounded-2xl dark:bg-white/10 bg-black/10 backdrop-blur-xl p-4 w-full"
      >
        <div className='lex flex-row items-center justify-center'>
          <i className='text-2xl text-red-500'><CgDanger /></i>
        </div>
        <div className='flex flex-col justify-between'>
          <div><span className="text-[13px]">Alerte urgent</span></div>
          <div className='text-[12px]'>{truncateToWords("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione consectetur,", 8)}</div>
        </div>
        <div> <i className='text-[14px] cursor-pointers text-red-500'><FaTrashRestoreAlt /></i></div>
      </div>
  );
};

export default HistoryCard