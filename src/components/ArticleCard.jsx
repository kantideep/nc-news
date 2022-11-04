import { Link } from 'react-router-dom'

const ArticleCard = ({ article }) => {

    const { article_id, title, author, topic, votes, created_at, comment_count } = article;
    
    return (
        <div>
            <Link to={`/articles/${article_id}`}><h3>{title}</h3></Link>
            <div>
                <p> topic: {topic}</p>
                <p> author: {author}</p>
                <p> date: {created_at}</p>
                <p> votes: {votes}</p>
                <p> comment_count: {comment_count}</p>
            </div>
        </div>
    )
}

export default ArticleCard;