import { useQuery } from "@tanstack/react-query";
import { HiChevronDoubleDown } from "react-icons/hi2";
import { getMarketsData } from "../../services/getMarketsData";
import Spinner from "./../../ui/Spinner";
import React, { useContext, useState } from "react";
import { CryptoContext } from "../../Context";
import MarketDetails from "./MarketDetails";

function GetMarkets() {
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading } = useQuery({
    queryKey: ["MarketsData"],
    queryFn: getMarketsData,
  });

  const { state, dispatch } = useContext(CryptoContext);

  function handleOpened(key) {
    dispatch({ type: "set/openedMarket", payload: key });
    setIsOpen((o) => !o);
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="max-w-screen-lg mx-auto mt-10 overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-300">
        <thead className="text-white bg-gray-800">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase"
            >
              Exchange
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase"
            >
              Status
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase"
            >
              Mapped Instruments
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase"
            >
              Unmapped Instruments
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase"
            >
              Active
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase"
            >
              Retired
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase"
            >
              Details
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {Object.entries(data?.Data).map(([key, value]) => (
            <React.Fragment key={key}>
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                  {key}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                  {value.EXCHANGE_STATUS}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                  {value.MAPPED_INSTRUMENTS_TOTAL}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                  {value.UNMAPPED_INSTRUMENTS_TOTAL}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                  {value.INSTRUMENT_STATUS.ACTIVE}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                  {value.INSTRUMENT_STATUS.RETIRED}
                </td>
                <td className="py-4 text-sm text-gray-500 px-11 whitespace-nowrap">
                  <button
                    className="text-gray-900"
                    value={key}
                    onClick={() => handleOpened(key)}
                  >
                    <HiChevronDoubleDown />
                  </button>
                </td>
              </tr>
              {state.openedMarket === key && isOpen && (
                <tr>
                  <td colSpan="7">
                    <MarketDetails id={state.openedMarket} />
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GetMarkets;
