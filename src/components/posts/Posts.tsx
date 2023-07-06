import Post from "./Post";
import "./posts.css";

import usePosts from "./utils";


function Posts({ totalPosts }) {
  const { posts, error, isLoading } = usePosts();

  if (isLoading) return <div>...Loading</div>
  if (error) return <div>{error}</div>
  return (
    <div className="posts">
      {posts.data.slice(0, totalPosts).map(post => 
        <Post key={post.id} title={post.title} body={post.body} />
      )}
    </div>
  )
}


export default Posts;