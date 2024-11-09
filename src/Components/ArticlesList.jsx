import ArticleCard from "./ArticleCard";
import { useState, useEffect } from "react";
import { getAllArticles } from "../../api";
import { useSearchParams } from "react-router-dom";
import { Filter } from "./Filter";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const topic = searchParams.get("topic") || undefined;
  const sort_by = searchParams.get("sort_by") || undefined;
  const order = searchParams.get("order") || undefined;

  useEffect(() => {
    getAllArticles(topic, sort_by, order)
      .then((articles) => {
        setArticles(articles);
      })
      .catch((err) => {
        alert(err, "All articles error");
      });
  }, [searchParams]);
  return (
    <>
      <Filter searchParams={searchParams} setSearchParams={setSearchParams} />
      <ul id="ArticleList">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </>
  );
};

export default ArticlesList;
