import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () =>{
  return (
  <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
          </div>
          <Post message="Hi!" like="5"/>
          <Post message="My first post" like="15"/>
      </div>
  </div>
  );
}

export default MyPosts;