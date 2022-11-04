import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import CommentCard from "./CommentCard";
import { fetchCommentsByArticle } from "../fetchAPI";

const CommentList = () => {

    const { article_id } = useParams();
    const [commentList, setCommentList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetchCommentsByArticle(article_id)
            .then((commentListData) => {
            setCommentList(commentListData);
                setIsLoading(false);
            })

    }, [article_id])

    return (
        <section>
            {isLoading ? (<h2>Loading comments...</h2>) : (commentList.map((comment) => {
                return <CommentCard key={comment.comment_id}  comment={comment} />
            }))}
        </section>
    )
}

export default CommentList;