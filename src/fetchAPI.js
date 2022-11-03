import axios from "axios";

const myAPI = axios.create({
    baseURL: "https://nc-news-app-kanti.herokuapp.com/api/",
});

//api/articles?sort_by=comment_count&order=asc"

export const fetchArticles = (topic, sort_by = 'created_at', order='desc') => {
    return myAPI.get("/articles", { params: { topic, sort_by, order} }).then((res) => {
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

export const updateArticleVotes = (article_id, vote) => {
    const body = { inc_votes: vote };
    return myAPI.patch(`/articles/${article_id}`, body).then((res) => {
        return res.data.article;
    })
};