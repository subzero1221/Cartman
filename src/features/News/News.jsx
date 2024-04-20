import TopNews from "./TopNews";

function News({ news, topNews }) {
  return (
    <div className="max-w-sm overflow-hidden transition-shadow duration-300 ease-in-out bg-white rounded-lg shadow-lg hover:shadow-2xl">
      <img
        className="object-cover w-full h-48"
        src={news.urlToImage}
        alt="News"
      />
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold">{news.title}</h3>
        <p className="text-gray-700">{news.description}</p>
      </div>
      <div className="flex items-center justify-between px-6 pt-4 pb-2">
        <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 rounded-full bg-gradient-to-r from-gray-200 to-gray-300">
          {news.publishedAt.split("T")[0]}
        </span>
        <a
          href={news.url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-1 text-sm font-semibold text-white transition-colors duration-300 rounded-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}

export default News;
