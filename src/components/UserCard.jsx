
const UserCard = ({ user }) => {

    const { username, avatar_url } = user;

    return (

        <article>
            <div>
                <img src={avatar_url} alt={username}></img>
                <h3>{username}</h3>
            </div>
        </article>
    )
}

export default UserCard;