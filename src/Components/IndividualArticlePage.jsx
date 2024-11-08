import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addVote, getArticleByID } from "../../api";
import CommentsSection from "./CommentsSection";

const IndividualArticlePage = () => {
  const [article, setArticle] = useState({});
  const [votes, setVotes] = useState(0);

  const { article_id } = useParams();
  useEffect(() => {
    getArticleByID(article_id).then((article) => {
      setArticle(article.article[0]);
      setVotes(article.article[0].votes);
    });
  }, []);

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
      <CommentsSection article_id={article_id} />
    </>
  );
};

export default IndividualArticlePage;
