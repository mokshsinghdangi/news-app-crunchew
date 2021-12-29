import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;

    setLoading(true);

    let data = await fetch(url);

    let parsedData = await data.json();

    setArticles(parsedData.articles);
    setLoading(false);
    setTotalResults(parsedData.totalReasult);
  };

  useEffect(() => {
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apikey=${props.apikey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;

    setPage(page + 1);

    // setLoading(true);

    let data = await fetch(url);

    let parsedData = await data.json();

    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <>
      <div className="news">
        <h1 className="head">Top {props.category} headlines</h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="news-items">
            {articles.map((element) => {
              return (
                <NewsItems
                  key={element.url}
                  title={element.title}
                  description={element.description}
                  img={element.urlToImage}
                  tag={element.author}
                  newsUrl={element.url}
                  date={element.publishedAt}
                />
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

News.defaultProps = {
  country: "in",
  pageSize: 20,
  category: "general",
};

export default News;
