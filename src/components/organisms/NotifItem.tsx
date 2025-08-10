import logo from '../../assets/png/logo.png'
import { truncateToWords } from '../../utils/truncateToWords';
import { CgDanger } from "react-icons/cg";


interface notifProps {
  text: string;
}

const NotifItem: React.FC<notifProps> = ({ text }) => {


  return (
  <div
    className="flex flex-row justify-between items-center transition-all duration-300 absolute top-8 rounded-2xl left-1/2 -translate-x-1/2 dark:bg-white/10 bg-black/10 backdrop-blur-xl px-4 py-1 z-[9999] w-90"
  >
    <div className='w-30 h-20 flex flex-row items-center justify-center'>
       <img 
            src={logo} 
            alt="fond" 
            className="object-contain" 
        />  
    </div>
    <div className='flex flex-col justify-between'>
      <div>MotoSecure</div>
      <div className='text-[12px]'>{truncateToWords(text, 10)}</div>
    </div>
    <div className='opacity-60'><i className='text-2xl text-red-500'><CgDanger /></i></div>
  </div>

  );
};

export default NotifItem