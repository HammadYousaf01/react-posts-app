import Posts, { PostsAxios } from "./components/posts";
import Nav from "./components/navbar";

function App() {
  return (
    <>
      <Nav />
      <Posts totalPosts={10} />
    </>
  )
}

export default App
