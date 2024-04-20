import FearCircle from "./FearCircle";
import { useQuery } from "@tanstack/react-query";
import { getCryptoNews } from "../../services/getCryptoData";

function FearandGreed() {
  const { data } = useQuery({
    queryKey: ["crypNews"],
    queryFn: getCryptoNews,
  });

  const getColor = (value) => {
    if (value < 25) return "text-red-500"; // Fear
    if (value < 50) return "text-yellow-500"; // Neutral Fear
    if (value < 75) return "text-green-400"; // Greed
    return "text-green-600"; // Extreme Greed
  };

  return (
    <div className="container px-4 py-4 mx-auto">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Community Top Posts */}
        <div className="p-5 transition duration-500 ease-in-out transform bg-gray-800 rounded-lg shadow-lg hover:scale-105">
          <h2 className="mb-4 text-2xl font-bold text-white">
            Community Top News
          </h2>
          <div className="space-y-3">
            {/* Sample list of posts. Replace with real data as needed. */}
            <p className="text-gray-300 transition duration-300 ease-in-out hover:text-gray-100">
              <span className="mr-2 font-semibold text-indigo-400">•</span>
              {data?.Data[0].title}
              <a
                href={data?.Data[0].url}
                className="pl-2 text-gray-200 underline decoration-slice hover:text-gray-600"
              >
                More
              </a>
            </p>

            <p className="text-gray-300 transition duration-300 ease-in-out hover:text-gray-100">
              <span className="mr-2 font-semibold text-indigo-400">•</span>
              {data?.Data[1].title}
              <a
                href={data?.Data[1].url}
                className="pl-2 text-gray-200 underline decoration-slice hover:text-gray-600"
              >
                More
              </a>
            </p>
            <p className="text-gray-300 transition duration-300 ease-in-out hover:text-gray-100">
              <span className="mr-2 font-semibold text-indigo-400">•</span>
              {data?.Data[2].title}
              <a
                href={data?.Data[2].url}
                className="pl-2 text-gray-200 underline decoration-slice hover:text-gray-600"
              >
                More
              </a>
            </p>
          </div>
        </div>

        {/* Fear & Greed Index */}
        <div className="flex items-center justify-between p-5 transition duration-500 ease-in-out transform bg-gray-800 rounded-lg shadow-lg hover:scale-105">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-white">
              Fear & Greed Index
            </h2>
            <p className="text-sm text-gray-300">
              Current Index:{" "}
              <span className={`${getColor(65)} font-bold`}>{65} (Greed)</span>
            </p>
            <p className="text-sm text-gray-300">
              Previous Day:{" "}
              <span className="font-bold text-red-500">50 (Neutral)</span>
            </p>
            <p className="text-sm text-gray-300">
              Last Week:{" "}
              <span className="font-bold text-yellow-500">30 (Fear)</span>
            </p>
          </div>
          <div className="flex justify-end flex-1">
            <FearCircle value={65} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FearandGreed;
