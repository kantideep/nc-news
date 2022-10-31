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
            <h2>User List Page</h2>
            {isLoading ? (<h2>Loading users...</h2>) : (userList.map((user) => {
                return <UserCard key={ user.username } user={user} />
            }))}
    </section>
        )
}

export default UserList