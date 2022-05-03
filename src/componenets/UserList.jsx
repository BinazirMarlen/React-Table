import React from 'react';
import UserItem from './UserItem';

const UserList = ({users, title, remove}) => {
    return (
        <div>
            <h1 style={{textAlign: "center"}}>{title}</h1>
            <div className='user'>
            <table>
             <tr>
                <th>checkbox</th>
                <th>Id</th>
                <th></th>
                <th>Username</th>
                <th>UserEmail</th>
                <th>WebSite</th>
                <th></th>
            </tr>
            
            {users.map((user, index) =>
                <UserItem remove={remove} number={index+1} user={user} key={user.id}/>
                )}
            </table>
            </div>
           
        </div>
    );
};

export default UserList;