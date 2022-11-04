import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticleById, updateArticleVotes } from "../fetchAPI";
import CommentList from "./CommentList";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState([]);
  const { title, votes, topic, body, author, created_at } = article;
  const [newVotes, setNewVotes] = useState(0);

  const handleClick = (vote) => {
    setNewVotes(newVotes + 1);
    updateArticleVotes(article_id, vote);
  }
  
  useEffect(() => {
    setIsLoading(true);
    fetchArticleById(article_id)
      .then((article) => {
        setArticle(article);
        setIsLoading(false);
    })
      .catch((err) => {
        setIsLoading(false);
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
          <div>
            <button onClick={() => handleClick(1)}>👍</button>
            <h5>Votes: {votes + newVotes} </h5>
        </div>
        <CommentList />
    
      </section>
      </main>
    );
};

export default SingleArticle;