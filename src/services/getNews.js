const newsKey = "ab628ae368444b72aea14cdaa3422f87";

export async function getNews() {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${newsKey}`
  );

  return res.json();
}
