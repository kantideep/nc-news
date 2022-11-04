import { useState, useEffect } from "react";
import UserCard from './UserCard';
import { fetchUsers } from "../fetchAPI";
import { Link } from 'react-router-dom'


const UserList = () => {

    const [userList, setUserList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetchUsers().then((userListData) => {
            setUserList(userListData);
            setIsLoading(false);
        })
    }, [])

    return (
        <section>
            {isLoading ? (<h2>Loading users...</h2>) : (userList.map((user) => {
                return <Link key={user.username} to={`/users/${user.username}`}> <UserCard  user={user} /></Link>
            }))}
        </section>
    )
}

export default UserList;