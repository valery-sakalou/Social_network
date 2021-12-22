import MyPosts from './My posts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/Profilenfo';

const Profile = () =>{
  return <div className={s.content}>
    <ProfileInfo />
    <MyPosts />
</div>
}

export default Profile;