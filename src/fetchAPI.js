import axios from "axios";

const myAPI = axios.create({
    baseURL: "https://nc-news-app-kanti.herokuapp.com/api/",
});


export const fetchArticles = (topic, sort_by = 'created_at', order = 'desc') => {
    return myAPI.get("/articles", { params: { topic, sort_by, order } })
        .then((res) => {
        return res.data.articles;  })
        .catch((err) => {
            throw err;
        });
}

export const fetchUsers = () => {
    return myAPI.get("/users")
        .then((res) => {
            return res.data.users;
        })
        .catch((err) => {
            throw err;
        });
};

export const fetchTopics = () => {
    return myAPI.get("/topics")
        .then((res) => {
        return res.data.topics;
        })
        .catch((err) => {
            throw err;
        });
};

export const fetchArticlesByTopic = (slug) => {
    return myAPI.get(`?topic=${slug}`)
        .then((res) => {
        return res.data.articles;
        })
        .catch((err) => {
            throw err;
        });
};

export const fetchArticleById = (article_id) => {
    return myAPI.get(`/articles/${article_id}`)
        .then((res) => {
        return res.data.article;
        })
        .catch((err) => {
            throw err;
        });
};

export const updateArticleVotes = (article_id, vote) => {
    const body = { inc_votes: vote };
    return myAPI.patch(`/articles/${article_id}`, body)
        .then((res) => {
        return res.data.article;
        })
        .catch((err) => {
            throw err;
        });
};

export const fetchCommentsByArticle = (article_id) => {
    return myAPI.get(`/articles/${article_id}/comments`)
        .then((res) => {
        return res.data.comments;
        })
        .catch((err) => {
            throw err;
        });
};