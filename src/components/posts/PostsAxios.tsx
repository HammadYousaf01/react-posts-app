import React from "react";
import useAxios from "axios-hooks";

import Post from "./Post";
import { IPosts } from "./utils";



const PostsAxios: React.FC = () => {
  const [{ data, loading }] = useAxios("https://jsonplaceholder.typicode.com/posts");
  const totalPosts = 10;

  if (loading) return <div>...Loading</div>
  return (
    <div className="posts">
      {data.slice(0, totalPosts).map((post: IPosts) => 
        <Post key={post.id} title={post.title} body={post.body} />
      )}
    </div>
  )
}

export default PostsAxios;