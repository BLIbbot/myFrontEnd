const ArticleCard = ({ article }) => {
  return (
    <li className="ArticleCard" key={article.article_id}>
      <img id="ArticleImg" src={article.article_img_url} />
      <h2 id="ArticleTitle">{article.title}</h2>
      <p id="ArticleAuthor">Authored by: {article.author}</p>
      <p id="ArticleVotes">Votes:{article.votes}</p>
      <p id="TopComment">Top Comment</p>
      <p id="ArticleCommentCount">{article.comments_count} comments</p>
      <p id="ArticleTopic">Topic: {article.topic}</p>
      <p id="ArticleCreationInfo">Created at: {article.created_at}</p>
    </li>
  );
};

export default ArticleCard;
