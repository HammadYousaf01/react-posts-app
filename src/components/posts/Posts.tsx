import React from "react";
import Post from "./Post";
import usePosts, { IPosts } from "./utils";


const Posts: React.FC = () => {
  const { posts, error, isLoading } = usePosts();
  const totalPosts = 10;

  if (isLoading) return <div>...Loading</div>
  if (error) return <div>{error}</div>
  return (
    <div className="posts">
      {posts?.data.slice(0, totalPosts).map((post: IPosts) => 
        <Post key={post.id} title={post.title} body={post.body} />
      )}
    </div>
  )
}

export default Posts;