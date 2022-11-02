import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticleById } from "../fetchAPI";


const SingleArticle = () => {

    const { article_id } = useParams();
    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetchArticleById(article_id).then((article) => {
            setArticle(article);
            setIsLoading(false);


        });
    }, [article_id]);
    
    if (isLoading) return (<h2>Loading article...</h2>);



    return (
      <main>
        <section>
          <h2>{article.title}</h2>
          <h3>Author: {article.author}</h3>
          <h3>Topic: {article.topic}</h3>
          <p>{article.body}</p>
          <h4>Date: {article.created_at}</h4>
        </section>
      </main>
    );
};

export default SingleArticle;