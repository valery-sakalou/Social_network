import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem =(props)=>{
    let path = "/dialogs/"+props.id;
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props)=>{
    return <div className={s.message}>{props.message}</div>
}

const Dialogs =(props)=>{

    let dialogs =[
        {id:1, name:'Dimych'},
        {id:2, name:'Andrey'},
        {id:3, name:'Sveta'},
        {id:4, name:'Sasha'},
        {id:5, name:'Victor'},
        {id:6, name:'Valera'}
    ]
    let messages = [
            {id:1, message:"Hi!"},
            {id:2, message:"What?"},
            {id:3, message:"Why?"}
        ]
        
    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElements = messages.map(m => <Message message={m.message}/>);
 
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;