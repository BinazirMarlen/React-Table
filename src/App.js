import React, {useRef, useState} from 'react';

import UserForm from './componenets/UserForm';
// import UserItem from './componenets/UserItem';
import UserList from './componenets/UserList';
// import MyButton from './componenets/UI/button/MyButton';
// import MyInput from './componenets/UI/input/MyInput';
import MySelect from './componenets/UI/select/MySelect';
import './styles/app.css'


function App() {
  const[users, setUser] = useState([
    {id: 1, name: 'Darcy', email: 'Darcy@com', website: 'www.users.com'},
    {id: 2, name: 'Bingley', email: 'Bingley@com' , website: 'www.users.com'},
    {id: 3, name: 'Lizzy', email: 'lizzy@com', website: 'www.users.com'},
    {id: 4, name: 'Ned', email: 'ENed@com', website: 'www.users.com'},
    {id: 5, name: 'Denny', email: 'Targaryan@com', website: 'www.users.com'},
    {id: 6, name: 'Jon', email: 'Snow@com', website: 'www.users.com'},
    {id: 7, name: 'Robb', email: 'northKing@com', website: 'www.users.com'},
    {id: 8, name: 'Will', email: 'Li@com', website: 'www.users.com'},
    {id: 9 , name: 'Kate', email: 'Williams@com', website: 'www.users.com'},
  ]);

  const [selectedSort, setSelectedSort] = useState('')

 const createUser =(newUser)=> {
  setUser([...users, newUser])
 }

 const removeUser = (user) => {
  setUser(users.filter(u => u.id !== user.id))
 }
  
 const sortUsers= (sort) => {
   setSelectedSort(sort);
   setUser([...users].sort((a, b)=>a[sort].localeCompare(b[sort])))
 }
  
  return (
    <div className="App">
     <UserForm create={createUser} />
     <hr style={{margin: '15px'}}/>
     <div>
       <MySelect
        value = {selectedSort}
        onChange = {sortUsers}
        defaultValue='Sort by'
        options = {[
           {value: 'name', name: 'By name'},
           {value: 'email', name: 'By Email'},
         ]}

       />
     </div>
     {users.length !==0
     ?
     <UserList remove = {removeUser} users={users} title="Users List" />   
     :
     <h1 style={{textAlign: 'center'}}>User not found!</h1>
     }
     
    </div>
  );
}

export default App;
