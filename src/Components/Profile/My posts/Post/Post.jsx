import s from './Post.module.css';

const Post = () =>{
  return (
  <div>  
    <div className={s.item}>
      <img src="https://www.pinclipart.com/picdir/middle/49-490443_avatar-icon-tlcharger-avatar-icon-clipart.png" />
      Post1
      <div>
        <span>Like</span>
      </div>
    </div>
  </div>
  );
}

export default Post;