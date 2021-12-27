import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () =>{
  let posts = [
    {id:1, post:'Hi!', likeCount:5},
    {id:2, post:'My first post', likeCount:15}
  ]

  let postElements = posts
    .map(p=> <Post message={p.message} likeCount={p.likeCount}/>);
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