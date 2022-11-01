import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { fetchArticles } from "../fetchAPI";

const ArticleList = ({topic}) => {
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchArticles(topic).then((ArticleListData) => {
      setArticleList(ArticleListData);
      setIsLoading(false);
    });
  }, [topic]);

  return (
    <section>
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
