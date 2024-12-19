import { useEffect, useState } from 'react'
import UsersPage from './pages/UsersPage'
import './App.css'
import { usersContext } from './context/usersContext'


function App() {

    const [users, setUsers] = useState([])


    useEffect(() => {

        async function getUsers() {
            try {
                const resp = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!resp.ok) throw new Error("Oops");
                const data = await resp.json();
                console.log(data)
                setUsers(data)
            } catch (err) {
                console.error(err);
            }
        }

        getUsers()
    }, [])


    return (
        <>
            <usersContext.Provider value={users}>
                <UsersPage />
            </usersContext.Provider>
        </>
    )
}

export default App
