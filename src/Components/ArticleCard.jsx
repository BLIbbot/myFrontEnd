import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <Link className="link" to={`/articles/${article.article_id}`}>
      <li className="ArticleCard">
        <img id="ArticleImg" src={article.article_img_url} />
        <h2 id="ArticleTitle">{article.title}</h2>
        <p id="ArticleAuthor">Authored by: {article.author}</p>
        <p id="ArticleVotes">Votes:{article.votes}</p>
        <p id="TopComment">Top Comment</p>
        <p id="ArticleCommentCount">{article.comments_count} comments</p>
        <p id="ArticleTopic">Topic: {article.topic}</p>
        <p id="ArticleCreationInfo">
          Created at: {new Date(article.created_at).toLocaleString()}
        </p>
      </li>
    </Link>
  );
};

export default ArticleCard;
