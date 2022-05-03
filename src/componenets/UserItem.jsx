import React from 'react';
import CheckBox from './CheckBox';
import MyButton from './UI/button/MyButton';

const UserItem = (props) => {
    return (
        <>
                <tbody>
                    <tr>
                        <td><div className='check'><CheckBox/></div></td>
                        <td>{props.number}</td>
                        <td></td>
                        <td>{props.user.name}</td>
                        <td>{props.user.email}</td>
                        <td>{props.user.website}</td>
                        <td><div className='user__btns'>
                            <MyButton onClick={()=>props.remove(props.user)}> Delete</MyButton></div></td>
                    </tr>
                </tbody>
      </>
    );
};

export default UserItem;