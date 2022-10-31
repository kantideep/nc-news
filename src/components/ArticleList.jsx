import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { fetchArticles } from "../fetchAPI";

const ArticleList = () => {
  const [ArticleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchArticles().then((ArticleListData) => {
      setArticleList(ArticleListData);
      setIsLoading(false);
    });
  }, []);

  return (
    <section>
      {isLoading ? (
        <h2>Loading articles...</h2>
      ) : (
        ArticleList.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })
      )}
    </section>
  );
};

export default ArticleList;
