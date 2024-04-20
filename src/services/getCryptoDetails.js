export async function getCryptoDetails(name) {
  const res = await fetch(
    `https://data-api.cryptocompare.com/asset/v1/data/by/symbol?asset_symbol=${name}`
  );
  console.log(name);
  return res.json();
}
