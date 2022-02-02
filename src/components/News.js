import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    getData();
    console.log("this is useEffect");
  },[]);

  const getData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?language=en&category=${props.category}&apiKey=9ba4796f37b1465bb15222ed537beeb3&page=${page}&pageSize=10`;
    // setLoading(true);
    //let url2 = {url1}
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    // setLoading(false);
    console.log("this is getData");
    // page>1 && setArticles(articles.concat(articles));
  };

  const fetchMoreData = () => {
    // setLoading(true);
    setPage(page+1);
    setArticles(articles.concat(articles));
    getData();
    // setLoading(false);
    // setTotalResults(parsedData.totalResults);
    console.log("this is Fetchmore");
  };
  //...articles, ...parsedData.articles] articles.concat(parsedData.articles)
  return (
    <>
      {console.log("this is render")}
      <div className="container my-4">
        <h1 className="text-center" style={{ margin: "40px 0px" }}>
          NewsBuzz - Top {props.category} highlights!
        </h1>

        <InfiniteScroll dataLength={articles.length}  next={fetchMoreData}
          hasMore={articles.length !== totalResults} key={articles.url}
          loader={<Spinner />}>
          
          {/* {<Spinner />} */}
          <div className="row">

            {/* {!loading && article && article.length > 0
              ?  */}
              {/* articles.filter(Boolean) */}
            {articles && articles.map((par) => {
              return (
                <div className="col-md-4" key={par.url}>
                  <NewsItem
                    title={par.title}
                    description={par.description}
                    author={par.author ? par.author : "Unknown"}
                    date={par.publishedAt}
                    source={par.source.name}
                    imageUrl={par.urlToImage}
                    newsUrl={par.url}
                  />
                </div>
              );
            })};

          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
        <button
          disabled={page <= 1}
          type="button"
          className="btn btn-primary btn-lg"
          onClick={this.handlePrev}
        >
          &larr; Previous
        </button>
        <button
          disabled={page + 1 > Math.ceil(totalResults / 20)}
          type="button"
          className="btn btn-primary btn-lg"
          onClick={this.handleNext}
        >
          Next &rarr;
        </button>
      </div> */}
      </div>
    </>
  );
};

News.defaultProps = {
  category: 'general',
  page: 1,
}

// export default News;

const General = () => {
  return <News category="general" />;
};
export default General;

const Business = () => {
  //  let url = `https://newsapi.org/v2/top-headlines?language=en&category=business&apiKey=9ba4796f37b1465bb15222ed537beeb3&page=1&pageSize=11`;

  return <News category="business" />;
};

const Entertainment = () => {
  return <News category="entertainment" />;
};

const Health = () => {
  return <News category="health" />;
};

const Science = () => {
  return <News category="science" />;
};

const Sports = () => {
  return <News category="sports" />;
};

const Technology = () => {
  return <News category="technology" />;
};

export { Business, Entertainment, Health, Science, Sports, Technology };
