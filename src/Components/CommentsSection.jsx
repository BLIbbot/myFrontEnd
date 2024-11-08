import { useContext, useEffect } from "react";
import { useState } from "react";
import { deleteComment, getComments } from "../../api";
import { UserContext } from "./UserContext";

const CommentsSection = ({ article_id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(article_id).then((response) => {
      setComments(response);
    });
  }, [comments]);

  const removeComment = (comment) => {
    deleteComment(comment);
  };

  const { user } = useContext(UserContext);

  return (
    <ul>
      {comments.map((comment) => {
        return (
          <li key={comment.comment_id} id="CommentCard">
            <h2>{comment.author}</h2>
            <p>{comment.body}</p>
            <p>Votes: {comment.votes}</p>
            <p>ID: {comment.comment_id}</p>
            {comment.author === user ? (
              <button onClick={() => removeComment(comment.comment_id)}>
                Delete Comment
              </button>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
};

export default CommentsSection;
