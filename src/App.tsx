import React from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Outlet } from "react-router-dom";

import Posts, { CreatePost, SinglePost } from "./components/posts";
import Nav from "./components/navbar";

const App: React.FC = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Posts />} />
        <Route path="posts">
          <Route index element={<Posts />} />
          <Route path=":id" element={<SinglePost />} />
          <Route path="new" element={<CreatePost />} />
        </Route>
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}


const Root: React.FC = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  )
} 


export default App
