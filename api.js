import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-first-backend-p0gm.onrender.com/api",
});

export const getAllArticles = () => {
  return apiClient.get("/articles").then((response) => {
    return response.data.articles;
  });
};

export const getArticleByID = (article_id) => {
  console.log(article_id);
  return apiClient.get(`/articles/${article_id}`).then((response) => {
    console.log(response.data);
    return response.data;
  });
};
