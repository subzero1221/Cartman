import { useQuery } from "@tanstack/react-query";
import { getNews } from "../../services/getNews";
import News from "./News";
import Spinner from "../../ui/Spinner";
import TopNews from "./TopNews";
import NewsHead from "./NewsHead";

function GetNews() {
  const { data, isLoading } = useQuery({
    queryKey: ["News"],
    queryFn: getNews,
  });

  const news = data?.articles.filter((el) => el.urlToImage !== null);

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <NewsHead />
      <div className="flex flex-wrap items-stretch justify-around gap-4 p-4">
        <TopNews news={data?.articles[0]} />

        {news.slice(1).map((el) => (
          <News news={el} topNews={data?.articles[0]} key={el.title} />
        ))}
      </div>
    </>
  );
}

export default GetNews;
