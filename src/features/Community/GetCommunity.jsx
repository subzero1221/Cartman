import RenderPosts from "./RenderPosts";

function GetCommunity() {
  const postData = [
    {
      username: "@CMCDavid",
      title: "Support for AVAX, Blast_L2, and Arbitrum added",
      excerpt:
        "We recently added support for @avax , @Blast_L2 , and @arbitrum on our NFT data product on #CoinMarketCap...",
      link: "https://t.co/PynrzxGezx",
      image: null,
      likes: 40.8,
      comments: 7,
    },
    {
      username: "@CryptosHeadlines",
      title: "Key Shiba Inu Indicator Surges 50%",
      excerpt: "During SHIB Price Surge, key indicators jump significantly...",
      link: "https://cryptosheadlines.com/key-shiba...",
      image: null,
      likes: 17.6,
      comments: 2,
    },
    {
      username: "@blockinsider",
      title: "Bitwise CEO Predicts BTC to Reach $100k",
      excerpt:
        "Post-2024 halving, despite recent price dip, BTC$BTC expected to soar...",
      link: "https://blockinsider.com/crypto/bitwise-ceo-predicts-bitcoin-to-soar-to-100k-post-2024-halving/",
      image: null,
      likes: 14.5,
      comments: 3,
    },
    // Add more post data as needed
  ];

  return (
    <div className="container px-4 mx-auto">
      <h1 className="my-10 text-3xl font-bold text-center">
        Community Updates
      </h1>
      {postData.map((post, index) => (
        <RenderPosts key={index} post={post} />
      ))}
    </div>
  );
}

export default GetCommunity;
