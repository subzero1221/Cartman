import { useNavigate } from "react-router-dom";

function RenderCrypto({ crypto }) {
  const { CoinInfo, DISPLAY } = crypto;
  const navigate = useNavigate();

  return (
    <div className="container p-2 mx-auto">
      <div className="relative overflow-hidden text-white transition-shadow duration-300 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl">
        <div className="absolute top-0 bottom-0 left-0 right-0 rounded-lg opacity-25 bg-gradient-to-br from-transparent to-gray-900"></div>
        <div className="relative z-10 grid items-center grid-cols-2 gap-2 p-3 text-xs md:grid-cols-9 md:gap-3 md:text-sm">
          <div className="flex justify-center col-span-2 md:col-span-1">
            <img
              src={`https://www.cryptocompare.com${CoinInfo.ImageUrl}`}
              alt={CoinInfo.Name}
              className="w-8 h-8 rounded-full"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs font-medium text-gray-400 uppercase">
              Symbol
            </p>
            <p>{CoinInfo.Name}</p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs font-medium text-gray-400 uppercase">Price</p>
            <p>{DISPLAY?.USD.PRICE}</p>
          </div>
          <div
            className={`flex flex-col justify-center ${
              Number(DISPLAY?.USD.CHANGEHOUR.replace("$", "")) > 0
                ? "text-green-400"
                : "text-red-500"
            }`}
          >
            <p className="text-xs font-medium text-gray-400 uppercase">
              Change (1h)
            </p>
            <p>{DISPLAY?.USD.CHANGEHOUR}</p>
          </div>
          <div
            className={`flex flex-col justify-center ${
              Number(DISPLAY?.USD.CHANGEDAY.replace("$", "")) > 0
                ? "text-green-400"
                : "text-red-500"
            }`}
          >
            <p className="text-xs font-medium text-gray-400 uppercase">
              Change (24h)
            </p>
            <p>{DISPLAY?.USD.CHANGEDAY}</p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs font-medium text-gray-400 uppercase">
              Market Cap
            </p>
            <p>{DISPLAY?.USD.MKTCAP}</p>
          </div>
          <div className="flex flex-col justify-center text-green-400">
            <p className="text-xs font-medium text-gray-400 uppercase">
              High (24h)
            </p>
            <p>{DISPLAY?.USD.HIGHDAY}</p>
          </div>
          <div className="flex flex-col justify-center text-red-500">
            <p className="text-xs font-medium text-gray-400 uppercase">
              Low (24h)
            </p>
            <p>{DISPLAY?.USD.LOWDAY}</p>
          </div>
          <div className="flex items-center justify-center md:col-span-1">
            <button
              value={CoinInfo.Name}
              onClick={(e) => navigate(`/crypto/${e.target.value}`)}
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RenderCrypto;
