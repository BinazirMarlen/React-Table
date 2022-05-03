import React, {useState} from 'react';

function CheckBox() {
    const [checked, setChecked] = useState(true);
    
    let msg;
    if(checked){
       msg = <span>checked</span>
    }else{
       msg = <span>not checked</span>
    }
 
    return <div>
       <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
       <span>{msg}</span>
    </div>;
 }

 export default CheckBox;