export default function Guide() {
    return (
        <div className="relative top-0 left-0 flex flex-col justify-center items-center h-[92%] w-screen overflow-none">
            <div className="absolute left-[7.5%] top-[9%] w-[45%] h-[1%] bg-blue-700 rounded-tr-full" />
            <div className="absolute left-[7.5%] top-[5%] w-[10%] h-[4%] bg-blue-700 rounded-t-4xl" />
            <div className="absolute left-[9.5%] top-[2%] w-[6%] h-[3%] bg-green-500 rounded-t-full" />
            <div className="absolute left-[25%] top-[0%] w-[2%] h-[9%] bg-yellow-500 rounded-tl-full" />
            <div className="absolute left-[45%] top-[0%] w-[2%] h-[9%] bg-yellow-500 rounded-tr-full" />
            <div className="absolute left-[27%] top-[0%] w-[18%] h-[4%] bg-yellow-500" />
            <div className="bg-gray-400 w-[50%] h-[80%] left-[5%] absolute rounded-xl flex flex-row items-center p-4">
                <img src="/planets/Sylva.png" className="h-[60%] w-[35%] object-fill"/>
            </div>
        </div>
    )
}