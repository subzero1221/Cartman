function NewsHead() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smooth scrolling
    });
  };

  return (
    <div className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container flex items-center justify-between px-6 py-4 mx-auto">
        <h1 className="text-xl font-semibold">News Page</h1>
        <button
          onClick={scrollToTop}
          className="px-4 py-2 font-bold text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-600"
        >
          Back to Top
        </button>
      </div>
    </div>
  );
}

export default NewsHead;
