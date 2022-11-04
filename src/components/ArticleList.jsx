import { useState, useEffect } from "react";
import { fetchArticles } from "../fetchAPI";
import ArticleCard from "./ArticleCard";
import ErrorPage from "./ErrorPage";

const ArticleList = ({ topic }) => {
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState('created_at');
  const [orderBy, setOrderBy] = useState('desc');
  const [err, setErr] = useState(null);


  const handleChangeSort = (event) => {
    setSortBy(event.target.value);
  };

  const handleChangeOrder = (event) => {
    setOrderBy(event.target.value);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchArticles(topic, sortBy, orderBy).then((ArticleListData) => {
      setArticleList(ArticleListData);
      setIsLoading(false);
    })
    .catch((err) => {
      if (err.response.data.status === 404) {
        setErr("Error 404: Path not found...")
      } else {
        setErr("Oh oh. Something has gone wrong...");
      }
      });
  }, [topic, sortBy, orderBy]);

  if (err) return (<ErrorPage />);

  return (
    <section>
      <div>
        <select
          id="sortBy"
          className="sortBy"
          defaultValue=""
          onChange={handleChangeSort}
        >
          <option value="created_at">Date</option>
          <option value="comment_count">Comment Count</option>
          <option value="votes">Votes</option>
        </select>
         <select
          id="orderBy"
          className="orderBy"
          defaultValue=""
          onChange={handleChangeOrder}
        >
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
        </select>
      </div>

      {isLoading ? (
        <h2>Loading articles...</h2>
      ) : (
        articleList.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })
      )}
    </section>
  );
};

export default ArticleList;
