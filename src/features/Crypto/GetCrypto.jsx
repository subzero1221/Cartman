import { useQuery } from "@tanstack/react-query";
import RenderCrypto from "./RenderCrypto";
import { getCryptoData } from "../../services/getCryptoData";
import Spinner from "../../ui/Spinner";
import { useContext } from "react";
import { CryptoContext } from "../../Context";
import FearandGreed from "./FearandGreed";

function GetCrypto() {
  const { data, isLoading } = useQuery({
    queryKey: ["crypto"],
    queryFn: getCryptoData,
  });

  const { state, dispatch } = useContext(CryptoContext);
  const pagination = state.page;
  const renderData = data?.Data.slice(pagination - 9, pagination);

  function handlePrevPage() {
    state.page > 10 && dispatch({ type: "Prev/page" });
  }

  function handleNextPage() {
    state.page < 90 && dispatch({ type: "Next/page" });
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <FearandGreed />
      {renderData.map((el) => (
        <RenderCrypto crypto={el} key={el.CoinInfo.name} />
      ))}
      <div className="flex items-center justify-center my-4 space-x-2">
        <button
          className="px-4 py-2 text-white transition duration-150 ease-in-out bg-gray-700 rounded-full hover:bg-gray-600 disabled:opacity-50"
          onClick={handlePrevPage}
        >
          Prev
        </button>
        <span>{Math.floor(pagination / 10) + 1}.../ 10</span>
        <button
          className="px-4 py-2 text-white transition duration-150 ease-in-out bg-gray-700 rounded-full hover:bg-gray-600 disabled:opacity-50"
          onClick={handleNextPage}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default GetCrypto;
