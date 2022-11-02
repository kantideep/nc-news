import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./context/UserContext";

import './App.css';
import Header from "./components/Header";
import Nav from "./components/Nav";
import SignIn from "./components/SignIn";
import ArticleList from "./components/ArticleList";
import TopicList from "./components/TopicList";
import SingleTopic from "./components/SingleTopic";
import SingleArticle from "./components/SingleArticle";

import Home from "./components/Home";

function App() {

  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <div className="App">
          {user === null ? (
            <SignIn />
          ) : (
            <>
              <Header />
              <Nav />
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/articles" element={<ArticleList />}></Route>
                <Route path="/topics" element={<TopicList />}></Route>
                <Route path="/topics/:topic" element={<SingleTopic />}></Route>
                <Route path="/articles/:article_id" element={<SingleArticle />}></Route>
              </Routes>
            </>
          )}
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
export default App;
