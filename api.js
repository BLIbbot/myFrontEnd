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

export const addVote = (article_id, value) => {
  return apiClient
    .patch(`/articles/${article_id}`, { inc_votes: value })
    .then((response) => {
      console.log(response);
    });
};

export const postComment = (article_id, commentbody, author) => {
  return apiClient.post(`/articles/${article_id}/comments`, {
    body: commentbody,
    article_id: article_id,
    author: author,
  });
};

export const getUserByUsername = (username) => {
  return apiClient.get(`/users/${username}`).then((response) => {
    return response.data.user;
  });
};
