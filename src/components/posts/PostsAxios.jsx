import useAxios from "axios-hooks";

import Post from "./Post";


export default function PostsAxios({ totalPosts }) {

  const [{ data, loading }] = useAxios("https://jsonplaceholder.typicode.com/posts")

  if (loading) return <div>...Loading</div>
  return (
    <div className="posts">
      {data.slice(0, totalPosts).map(post => 
        <Post key={post.id} title={post.title} body={post.body} />
      )}
    </div>
  )
}