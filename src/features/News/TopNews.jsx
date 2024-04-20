function TopNews({ news }) {
  return (
    <div className="relative max-w-4xl mx-auto mb-8 overflow-hidden bg-white rounded-lg shadow-lg">
      <div className="absolute inset-0 opacity-75 bg-gradient-to-r from-blue-600 to-blue-800"></div>
      <img
        className="object-cover w-full h-64 opacity-80"
        src={news.urlToImage}
        alt="Top News"
      />
      <div className="relative p-6">
        <h2 className="text-2xl font-bold text-white">{news.title}</h2>
        <p className="mt-2 text-gray-300">{news.description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-900 bg-white rounded-full">
            {news.publishedAt.split("T")[0]}
          </span>
          <a
            href={news.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1 text-sm font-semibold text-blue-600 transition-colors duration-300 bg-white rounded-full hover:bg-gray-100"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default TopNews;
