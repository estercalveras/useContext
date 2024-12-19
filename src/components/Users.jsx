import UserCard from './UserCard'
import { usersContext } from '../context/usersContext'
import { useContext } from 'react'

function Users() {

    const users = useContext(usersContext)

    return (
        <>
            {users && users.length && users.map((user) => <UserCard key={user.id} user={user} />)}
        </>
    )
}

export default Users
