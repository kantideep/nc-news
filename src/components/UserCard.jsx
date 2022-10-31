import { Link } from "react-router-dom";

const UserCard = ({ user }) => {

    const { username, avatar_url, name } = user;

    return (

        <article>
            <Link to={`/users/${username}`}><h3>username: {username}</h3></Link>
            <div>
                <img src={avatar_url} alt={username}></img>
                <p> name: {name}</p>
            </div>
        </article>
    )
}

export default UserCard;