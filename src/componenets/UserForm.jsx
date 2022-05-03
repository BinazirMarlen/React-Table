import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const UserForm = ({create}) => {
    const [user, setUser] = useState({name: '', email: '', website: ''})


    const addNewUser = (e) => {
        e.preventDefault()
        const newUser = {
            ...user, id: Date.now()
        }
        create(newUser)
        setUser({name: '', email: '', website: ''})
    }

    return (
        <form>     
            <MyInput
                value={user.name}
                onChange={e => setUser({...user, name: e.target.value})}
                type="text"
                placeholder="name "
            />       
            <MyInput
                value={user.email}
                onChange={e => setUser({...user, email: e.target.value})}
                type="text"
                placeholder="email"
            />
             <MyInput
                value={user.website}
                onChange={e => setUser({...user, website: e.target.value})}
                type="text"
                placeholder="website"
            />
            <MyButton onClick={addNewUser}>Create User</MyButton>
        </form>
    );
};

export default UserForm;