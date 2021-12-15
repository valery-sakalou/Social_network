import MyPosts from './My posts/MyPosts';
import s from './Profile.module.css';

const Profile = () =>{
  return <div className={s.content}>
  <div>
    <img src="https://n4.sdlcdn.com/imgs/i/g/n/galaxy-wooden-art-gallery-Natural-SDL910168366-1-7012a.jpg" />
  </div>
  <div>
    ava+description<img src="https://i.pinimg.com/originals/65/41/1a/65411a51ae58ed21711131ac3918846b.jpg"/>
  </div>
  <MyPosts />
</div>
}

export default Profile;