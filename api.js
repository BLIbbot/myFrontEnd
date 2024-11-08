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
  return apiClient.get(`/articles/${article_id}`).then((response) => {
    return response.data;
  });
};

export const getComments = (article_id) => {
  return apiClient.get(`/articles/${article_id}/comments`).then((response) => {
    return response.data.comments;
  });
};
