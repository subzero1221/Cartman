import { useQuery } from "@tanstack/react-query";
import { getMarketsDetails } from "../../services/getMarketsData";
import Spinner from "../../ui/Spinner";

function MarketDetails({ id }) {
  const { data, isLoading } = useQuery({
    queryKey: ["MarketsDetails", id],
    queryFn: () => getMarketsDetails(id),
  });

  // Ensure data is not undefined and id exists before accessing its properties
  const instruments = data?.Data?.[id]?.instruments;

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="mb-4 text-lg font-semibold">Instruments Information</h2>
      {instruments &&
        Object.keys(instruments).map((instrumentKey, index) => {
          const instrument = instruments[instrumentKey];
          return (
            <div
              key={index}
              className="p-4 mb-4 border border-gray-300 rounded-lg"
            >
              <h3 className="mb-2 font-semibold text-md">
                {instrument.INSTRUMENT}
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-sm">
                  <span className="font-semibold">Status:</span>{" "}
                  {instrument.INSTRUMENT_STATUS}
                </div>
                <div className="text-sm">
                  <span className="font-semibold">Mapped Instrument:</span>{" "}
                  {instrument.MAPPED_INSTRUMENT}
                </div>
                <div className="text-sm">
                  <span className="font-semibold">Total Trades:</span>{" "}
                  {instrument.TOTAL_TRADES_FUTURES}
                </div>
                <div className="text-sm">
                  <span className="font-semibold">Funding Rate Updates:</span>{" "}
                  {instrument.TOTAL_FUNDING_RATE_UPDATES}
                </div>
                <div className="text-sm">
                  <span className="font-semibold">Open Interest Updates:</span>{" "}
                  {instrument.TOTAL_OPEN_INTEREST_UPDATES}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default MarketDetails;
