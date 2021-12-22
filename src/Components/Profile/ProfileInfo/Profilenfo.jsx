import s from './ProfileInfo.module.css';

const ProfileInfo = () =>{
  return <div className={s.content}>
  <div>
    <img src="https://n4.sdlcdn.com/imgs/i/g/n/galaxy-wooden-art-gallery-Natural-SDL910168366-1-7012a.jpg" />
  </div>
  <div className={s.descriptionBlock}>
    ava+description
  </div>
</div>
}

export default ProfileInfo;