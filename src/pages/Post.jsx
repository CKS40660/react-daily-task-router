import { NavLink, Outlet } from "react-router-dom";

function Post() {
  return (
    <div>
      <h2>這是POST</h2>
      <NavLink to="1">文章 1</NavLink>
      <NavLink to="2">文章 2</NavLink>
      <Outlet></Outlet>
    </div>
  );
}

export default Post;
