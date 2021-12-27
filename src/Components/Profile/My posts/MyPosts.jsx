import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () =>{
  let postsData = [
    {id:0, post:'Hi!', likeCount:5},
    {id:1, post:'My first post', likeCount:15}
  ]
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
          <Post message={postsData[0].message} likeCount={postsData[0].likeCount}/>
          <Post message={postsData[1].message} likeCount={postsData[1].likeCount}/>
          </div>
      </div>
  </div>
  );
}

export default MyPosts;