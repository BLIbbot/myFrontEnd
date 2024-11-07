import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleByID } from "../../api";

const IndividualArticlePage = () => {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  useEffect(() => {
    getArticleByID(article_id).then((article) => {
      setArticle(article.article[0]);
    });
  }, [article_id]);

  return (
    <section className="IndividualArticle">
      <h1 id="ArticleTitle">{article.title}</h1>
      <img id="ArticleImg" src={article.article_img_url} />
      <p id="ArticleVotes">Votes:{article.votes}</p>
      <h3 id="CommentSectionTitle">Comment Section</h3>
      <p id="TopComment">Top Comment</p>
      <p id="ArticleCommentCount">{article.comments_count} comments</p>
      <p id="ArticleTopic">Topic: {article.topic}</p>
      <p id="ArticleAuthor">Authored by: {article.author}</p>
      <p id="ArticleCreationInfo">Created at: {article.created_at}</p>
    </section>
  );
};

export default IndividualArticlePage;
