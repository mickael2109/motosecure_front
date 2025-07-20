import logo from "../assets/png/logo.png";

const LoadingPage = () => {
    return (
        <div className="bg-white flex flex-col items-center justify-center h-screen gap-2 absolute w-full z-50">
           <div>
                <img
                    src={logo} // ou "../assets/image9.png" selon ta structure
                    alt="image"
                    className="h-30 w-30 object-contain"
                />
           </div>
           <div><span className="text-black/80 text-sm">MoneyFlow</span></div>
        </div>
    );
}

export default LoadingPage;
