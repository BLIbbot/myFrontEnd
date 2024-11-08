import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addVote, getArticleByID, postComment } from "../../api";
import CommentsSection from "./CommentsSection";
import { UserContext } from "./UserContext";

const IndividualArticlePage = () => {
  const [article, setArticle] = useState({});

  const { article_id } = useParams();
  useEffect(() => {
    getArticleByID(article_id).then((article) => {
      setArticle(article.article[0]);
      setVotes(article.article[0].votes);
    });
  }, []);

  const [votes, setVotes] = useState(0);

  const vote = (value) => {
    setVotes((currentvotes) => {
      return currentvotes + value;
    });
    addVote(article_id, value)
      .then(() => {})
      .catch(() => {
        setVotes((currentvotes) => {
          return currentvotes - value;
        });
      });
  };

  const [commentToPost, setCommentToPost] = useState("");
  const { user } = useContext(UserContext);

  const comment = (event) => {
    event.preventDefault();
    if (!user) {
      alert("please sign in to post a comment");
    } else {
      postComment(article_id, commentToPost, user);
      setCommentToPost("");
    }
  };

  return (
    <>
      <section className="IndividualArticle">
        <h1 id="ArticleTitle">{article.title}</h1>
        <img id="ArticleImg" src={article.article_img_url} />
        <p id="ArticleVotes">Votes:{votes}</p>
        <button id="AddVoteButton" onClick={() => vote(1)}>
          UpVote
        </button>
        <button id="RemoveVoteButton" onClick={() => vote(-1)}>
          DownVote
        </button>
        <h3 id="TopComment"></h3>
        <p id="ArticleTopic">Topic: {article.topic}</p>
        <p id="ArticleAuthor">Authored by: {article.author}</p>
        <p id="ArticleCreationInfo">
          Created at: {new Date(article.created_at).toLocaleString()}
        </p>
      </section>
      <form onSubmit={comment}>
        <label>
          Add Comment
          <input
            value={commentToPost}
            onChange={(e) => setCommentToPost(e.target.value)}
          ></input>
          <button type="submit">Post Comment</button>
        </label>
      </form>
      <CommentsSection article_id={article_id} />
    </>
  );
};

export default IndividualArticlePage;
