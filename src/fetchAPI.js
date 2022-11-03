import axios from "axios";

const myAPI = axios.create({
    baseURL: "https://nc-news-app-kanti.herokuapp.com/api/",
});

export const fetchArticles = (topic) => {
    return myAPI.get("/articles", { params: { topic } }).then((res) => {
        return res.data.articles;
    });
}

export const fetchUsers = () => {
    return myAPI.get("/users").then((res) => {
        return res.data.users;
    });
};

export const fetchTopics = () => {
    return myAPI.get("/topics").then((res) => {
        return res.data.topics;
    });
};

export const fetchArticlesByTopic = (slug) => {
    return myAPI.get(`?topic=${slug}`).then((res) => {
        return res.data.articles;
    })
};

export const fetchArticleById = (article_id) => {
    return myAPI.get(`/articles/${article_id}`).then((res) => {
        return res.data.article;
    })
};


