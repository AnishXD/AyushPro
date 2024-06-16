import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import rarow from "./rarrow.png"

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=health&apiKey=2e24464441e74e6099e8b70b482906c5&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(50);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `Medical Headlines`;
    updateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.country, page]);

  const fetchNextPage = async () => {
    setPage(page + 1);
  };

  const fetchPrevPage = async () => {
    setPage(page - 1);
  };

  return (
    <div className="relative">
      <h1 className="text-center mt-4 mb-8 text-6xl font-semibold">Medical Headlines</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="container mx-auto grid grid-cols-4 gap-4">
          {articles.length === 0 ? (
            <p className="col-span-4 text-center">No news articles found.</p>
          ) : (
            articles.map((element, index) => (
              <div className="col-span-4 md:col-span-1" key={`${element.url}-${index}`}>
                <NewsItem
                  title={element.title || ""}
                  description={element.description || ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            ))
          )}
        </div>
      )}

      <div className="fixed bottom-4 right-4 flex flex-row justify-end space-x-4">
        <button
          className={`btn btn-dark ${page === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={fetchPrevPage}
          disabled={page === 1}
        >
          <img src="https://cdn.iconscout.com/icon/free/png-256/free-left-arrow-1851077-1569227.png?f=webp&w=256" alt="another" width={100} height={100}/>
        </button>
        <button
          className={`btn btn-dark ${
            page * props.pageSize >= totalResults ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={fetchNextPage}
          disabled={page * props.pageSize >= totalResults}
        >
          <img src={rarow} alt="right arrow" width={100} height={100}/>
        </button>
      </div>
    </div>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 20,
  category: "health",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
