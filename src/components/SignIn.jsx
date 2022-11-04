import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { fetchUsers } from "../fetchAPI";
import UserCard from './UserCard';
import { Link } from 'react-router-dom'

const SignIn = () => {
  const [signInList, setSignInList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchUsers().then((userListData) => {
      setSignInList(userListData);
      setIsLoading(false);
    });
  }, []);

  const { setUser } = useContext(UserContext);

  return (
    <div>
      <h1>Select a user to log in:</h1>
      <br></br>
      <br></br>
      <ul>
        {isLoading ? (
          <h2>Loading Users</h2>
        ) : (
          signInList.map((user) => {
            return <Link key={user.username} to={`/articles/`}><li onClick={() => { setUser(user.username) }}>{<UserCard key={user.username} user={user} />}</li></Link>;
          })
        )}
      </ul>
    </div>
  );
};

export default SignIn;
