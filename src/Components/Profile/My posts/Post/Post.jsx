import s from './Post.module.css';

const Post = (props) =>{
  return (
  <div>  
    <div className={s.item}>
      <img src="https://www.pinclipart.com/picdir/middle/49-490443_avatar-icon-tlcharger-avatar-icon-clipart.png" />
      {props.message}
      <div>
        <span>{props.like}</span>
      </div>
    </div>
  </div>
  );
}

export default Post;