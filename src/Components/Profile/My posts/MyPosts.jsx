import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () =>{
  let posts = [
    {id:1, message:'Hi!', likesCount: 5},
    {id:2, message:'My first post', likesCount: 15},
    {id:3, message:'BlaBlaBla', likesCount: 1},
    {id:4, message:'YA, YA, Naturlich!', likesCount: 444}
  ]

  let postElements = 
    posts.map(p=> <Post message={p.message} likesCount={p.likesCount}/>);
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
        <div className={s.posts}>
          {postElements}
        </div>
      </div>
  </div>
  );
}

export default MyPosts;