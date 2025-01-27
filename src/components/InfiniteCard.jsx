
const InfiniteCard = () => {
  return (
    <div>
        <div className="relative flex items-center h-16 p-3 bg-green-900 rounded-full hover:bg-green-800">
            
            <div className="absolute bg-white border-2 border-black rounded-full left-[20px] w-11 h-11"></div>
            <div className="absolute bg-white border-2 border-black rounded-full left-[40px] w-11 h-11"></div>
            <div className="absolute bg-white border-2 border-black rounded-full left-[60px] w-11 h-11"></div>
            <div className="absolute bg-white border-2 border-black rounded-full left-[80px] w-11 h-11"></div>
            <div className="left-[100px] flex items-center justify-center bg-[#157231]  absolute bg-transparent border-2 border-green-400 rounded-full w-11 h-11">
                <img className="w-2 h-2" src="/2.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default InfiniteCard