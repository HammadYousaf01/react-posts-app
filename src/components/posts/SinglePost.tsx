import React from "react"
import { useParams } from "react-router-dom";

import Post from "./Post"
import { usePost } from "./utils";



const SinglePost: React.FC = () => {
  const { id } = useParams();
  const { post, error, loading } = usePost(id);


  if (loading) return <div>...Loading</div>
  if (error) return <div>{error.toString()}</div>
  return (
    <Post title={post.title} body={post.body} />
  )
}


export default SinglePost;