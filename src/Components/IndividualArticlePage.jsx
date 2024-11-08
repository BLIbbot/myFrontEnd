import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleByID } from "../../api";
import CommentsSection from "./CommentsSection";

const IndividualArticlePage = () => {
  const [article, setArticle] = useState({});

  const { article_id } = useParams();
  useEffect(() => {
    getArticleByID(article_id).then((article) => {
      setArticle(article.article[0]);
    });
  }, []);

  return (
    <>
      <section className="IndividualArticle">
        <h1 id="ArticleTitle">{article.title}</h1>
        <img id="ArticleImg" src={article.article_img_url} />
        <p id="ArticleVotes">Votes:{article.votes}</p>
        <button id="AddVoteButton">Add Vote</button>
        <h3 id="TopComment"></h3>
        <p id="ArticleTopic">Topic: {article.topic}</p>
        <p id="ArticleAuthor">Authored by: {article.author}</p>
        <p id="ArticleCreationInfo">
          Created at: {new Date(article.created_at).toLocaleString()}
        </p>
      </section>
      <CommentsSection article_id={article_id} id="commentssection" />
    </>
  );
};

export default IndividualArticlePage;
