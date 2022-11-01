import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Home = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <main>
      <h2>Welcome {user}</h2>
      <button onClick={() => {setUser(null);}}>sign out</button>
    </main>
  );
};

export default Home;
