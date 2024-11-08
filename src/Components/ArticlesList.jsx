import ArticleCard from "./ArticleCard";
import { useState, useEffect } from "react";
import { getAllArticles } from "../../api";
import { useSearchParams } from "react-router-dom";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const topic = searchParams.get("topic") || "";

  useEffect(() => {
    getAllArticles(topic)
      .then((articles) => {
        setArticles(articles);
      })
      .catch((err) => {
        alert(err, "All articles error");
      });
  }, [searchParams]);
  return (
    <ul id="ArticleList">
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </ul>
  );
};

export default ArticlesList;
