import ArticleCard from "./ArticleCard";

const ArticlesList = ({ articles }) => {
  console.log(articles);
  return (
    <ul id="ArticleList">
      {articles.map((article) => {
        return <ArticleCard article={article} />;
      })}
    </ul>
  );
};

export default ArticlesList;
