import apiClient from "../../api";
import { useState, useEffect } from "react";
import ArticlesList from "./ArticlesList";

const ArticlesListManager = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    apiClient
      .get("/articles")
      .then((articles) => {
        setArticles(articles.data.articles);
      })
      .catch((err) => {
        alert(err, "error");
      });
  }, []);

  return (
    <>
      <ArticlesList articles={articles} />
    </>
  );
};

export default ArticlesListManager;
