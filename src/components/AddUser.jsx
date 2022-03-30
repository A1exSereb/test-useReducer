import { usersActions, dispatchUsers } from "../contexts/users";
import { v4 as uuidv4 } from 'uuid';

const AddUser = () => {
    const onClick = () => {
        const id = uuidv4();

        dispatchUsers(usersActions.addUser({id,title: `user-${id}`}));
    }

    return <button onClick={onClick}>Add user</button>
}

export default AddUser;