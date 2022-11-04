const CommentCard = ({ comment } ) => {

    const { body, votes, author, created_at} = comment;

    return (
        <article>
            <div className="comment">
                <h3>{body}</h3>
                <h5>Comment Votes: {votes}</h5>
                <h5>By: {author}</h5>
                <h5>Date: {created_at}</h5>
            </div>
        </article>
    )
}

export default CommentCard;