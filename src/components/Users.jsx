import { useContext } from "react"
import { UsersContext,usersActions, dispatchUsers } from "../contexts/users"

const Users = () => {
    const users = useContext(UsersContext);

    return(
        <ul>
            {users?.map(user => {
                return(
                    <li key={user.id}>
                        {user.title}{""}
                        <button onClick={() => dispatchUsers(usersActions.removeUser(user))} >Remove user</button>
                    </li>
                )
            })}
        </ul>
    )
}

export default Users;