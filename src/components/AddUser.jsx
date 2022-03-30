import { useContext } from "react";
import { usersActions, UsersContext } from "../contexts/users";
import { v4 as uuidv4 } from 'uuid';

const AddUser = () => {
    const [users,dispatch] = useContext(UsersContext);
    const onClick = () => {
        const id = uuidv4();

        dispatch(usersActions.addUser({id,title: `user-${id}`}));
        console.log('users',users);
    }

    return <button onClick={onClick}>Add user</button>
}

export default AddUser;