import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () =>{
  return (
  <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <Post message="Hi!" like="5"/>
        <Post message="My first post" like="15"/>
      </div>
  </div>
  );
}

export default MyPosts;