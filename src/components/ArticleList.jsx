import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { fetchArticles } from "../fetchAPI";

const ArticleList = ({ topic }) => {
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState('created_at');
  const [orderBy, setOrderBy] = useState('desc');

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
    });
  }, [topic, sortBy, orderBy]);

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
