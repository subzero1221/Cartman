export async function getMarketsData() {
  const res = await fetch(
    "https://data-api.cryptocompare.com/index/v1/markets"
  );
  return res.json();
}

export async function getMarketsDetails(market) {
  const res = await fetch(
    `https://data-api.cryptocompare.com/futures/v1/markets/instruments?market=${market}`
  );
  return res.json();
}
