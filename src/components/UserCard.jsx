import { Link } from "react-router-dom";

const UserCard = ({ user }) => {

    const { username, avatar_url } = user;

    return (

        <article>
            <div>
                <img src={avatar_url} alt={username}></img>
                <Link to={`/users/${username}`}><h3>{username}</h3></Link>
            </div>
        </article>
    )
}

export default UserCard;