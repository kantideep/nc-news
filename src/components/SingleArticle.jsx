import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticleById, updateArticleVotes } from "../fetchAPI";
import ErrorPage from "./ErrorPage";


const SingleArticle = () => {
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [article, setArticle] = useState([]);
  const { title, topic, body, author, created_at } = article;
  const [votes, setVotes] = useState(0);

  
  useEffect(() => {
    setIsLoading(true);
    fetchArticleById(article_id)
      .then((article) => {
        setArticle(article);
        setIsLoading(false);
    })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [article_id]);

   
  if (isLoading) return (<h2>Loading article...</h2>);



    return (
      <main>
        <section>
          <h2>{title}</h2>
          <h3>Author: {author}</h3>
          <h3>Topic: {topic}</h3>
          <p>{body}</p>
          <h4>Date: {created_at}</h4>
        </section>
      </main>
    );
};

export default SingleArticle;