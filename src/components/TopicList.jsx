import { useState, useEffect } from "react";
import { fetchTopics } from "../fetchAPI";
import { useNavigate } from "react-router";

const TopicList = () => {
    
    const navigate = useNavigate();
    const [topicList, setTopicList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetchTopics().then((topicListData) => {
            console.log(topicListData)
            setTopicList(topicListData);
            setIsLoading(false);
        })
    }, [])
    

    if (isLoading) return (<h2>Loading topics...</h2>);

     return (
    <main>
      <h1>Topics</h1>
          <section>
            <ul>
             {topicList.map((topic) => {
                 const { slug } = topic;
                      
                return (
                    <li key={`${slug}`}>
                    <h2>{slug}</h2>
                    <button onClick={() => {
                        navigate(`/topics/${slug}`);
                      }}>
                      Related Articles
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>
    </main>
  );
};

export default TopicList;