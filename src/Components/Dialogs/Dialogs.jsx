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
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Dimych" id="1"/>
                <DialogItem name="Andrey" id="2"/>
                <DialogItem name="Sveta" id="3"/>
                <DialogItem name="Sasha" id="4"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi!"/>
                <Message message="What?"/>
                <Message message="Why?"/>
            </div>
        </div>
    )
}

export default Dialogs;