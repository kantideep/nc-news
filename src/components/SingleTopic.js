import { useParams } from "react-router-dom";
import ArticleList from "./ArticleList";

const SingleTopic = () => {
  
  const { topic } = useParams();

  return (
    <section>
      <h1>{topic}</h1>
      <ArticleList topic={topic} />
    </section>
  );
};

export default SingleTopic;


