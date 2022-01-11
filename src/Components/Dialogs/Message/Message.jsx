import s from './../Dialogs.module.css';
import React from 'react';



const Message = (props)=>{
    let newMsgElement = React.createRef();
    let addMsg = ()=>{
        let msg=newMsgElement.current.value;
        alert(msg);
    }

    return (
    <div className={s.message}>{props.message}
    <div>
        <textarea ref={newMsgElement}></textarea>
    </div>
    <div>
        <button onClick={addMsg}>Add msg</button>
    </div>
    </div>
    );
    
}



export default Message;