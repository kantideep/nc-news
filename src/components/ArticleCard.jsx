import { Link } from 'react-router-dom'

const ArticleCard = ({ article }) => {

    const { article_id, title, author, topic } = article;
    
    return (
        <div>
            <Link to={`/articles/${article_id}`}><h3>{title}</h3></Link>
            <div>
                <p> topic: {topic}</p>
                <p> author: {author}</p>
            </div>
        </div>
    )
}

export default ArticleCard;