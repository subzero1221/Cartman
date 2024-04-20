export async function getCryptoData() {
  const res = await fetch(
    `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD&api_key=897e0c0c4a8136b141a844d8318aa3893b87586360fb9bc567305444c61206fa'`
  );
  return res.json();
}

export async function getCryptoNews() {
  const res = await fetch(
    "https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=897e0c0c4a8136b141a844d8318aa3893b87586360fb9bc567305444c61206fa"
  );
  return res.json();
}
