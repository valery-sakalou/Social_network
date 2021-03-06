import state from '../../Redux/state';
import MyPosts from './My posts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/Profilenfo';


// let dialogs =[
//   {id:1, name:'Dimych'},
//   {id:2, name:'Andrey'},
//   {id:3, name:'Sveta'},
//   {id:4, name:'Sasha'},
//   {id:5, name:'Victor'},
//   {id:6, name:'Valera'}
// ]
// let messages = [
//       {id:1, message:"Hi!"},
//       {id:2, message:"What?"},
//       {id:3, message:"Why?"}
//   ]

const Profile = (props) =>{
  return <div className={s.content}>
    <ProfileInfo />
    <MyPosts posts={props.profilePage.posts}
             NewPostText={props.profilePage.NewPostText}
             addPost={props.addPost}/>
</div>
}

export default Profile;