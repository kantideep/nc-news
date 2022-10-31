import axios from "axios";

const myAPI = axios.create({
    baseURL: "https://nc-news-app-kanti.herokuapp.com/api/",
});

export const fetchArticles = (sortBy) => {
    if (!sortBy) {
        return myAPI.get("/articles").then((res) => {
            return res.data.articles;
        });
    } else {
        return myAPI.get(`/articles?sort_by=${sortBy}`).then((res) => {
            return res.data.articles;
        });
    }
};