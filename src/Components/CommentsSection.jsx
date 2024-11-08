import { useEffect } from "react";
import { useState } from "react";
import { getComments } from "../../api";

const CommentsSection = ({ article_id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(article_id).then((response) => {
      setComments(response);
    });
  }, [comments]);

  return (
    <ul>
      {comments.map((comment) => {
        return (
          <li key={comment.created_at} id="CommentCard">
            <h2>{comment.author}</h2>
            <p>{comment.body}</p>
            <p>Votes: {comment.votes}</p>
            <p>ID: {comment.article_id}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default CommentsSection;
