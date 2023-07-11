import React, { useContext, useEffect, useRef } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
} from "react-router-dom";

import Posts, { CreatePost, SinglePost } from "./components/posts";
import Nav from "./components/navbar";
import ThemeProvider, { ThemeContext } from "./ThemeContext";

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
  );

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

const Root: React.FC = () => {
  const theme = useContext(ThemeContext);
  const containerDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (theme === "dark") {
      containerDiv.current?.classList.add("dark-theme");
      containerDiv.current?.classList.remove("light-theme");
    } else {
      containerDiv.current?.classList.add("light-theme");
      containerDiv.current?.classList.remove("dark-theme");
    }
  }, [theme]);

  return (
    <div ref={containerDiv}>
      <Nav />
      <Outlet />
    </div>
  );
};

export default App;
