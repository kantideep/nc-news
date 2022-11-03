import { useState, useEffect } from "react";
import UserCard from './UserCard';
import { fetchUsers } from "../fetchAPI";

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
                return <UserCard key={user.username} user={user} />
            }))}
        </section>
    )
}

export default UserList;