import { Routes, Route } from "react-router-dom";
import PostList from "./pages/PostList";
import PostCreate from "./pages/PostCreate";
import PostEdit from "./pages/PostEdit";
import PostView from "./pages/PostView";

export default function AppRoutes({ posts, setPosts }) {
  return (
    <Routes>
      <Route path="/" element={<PostList posts={posts} />} />
      <Route path="/posts/new" element={<PostCreate posts={posts} setPosts={setPosts} />} />
      <Route path="/posts/:id/edit" element={<PostEdit posts={posts} setPosts={setPosts} />} />
      <Route path="/posts/:id" element={<PostView posts={posts} setPosts={setPosts} />} />
    </Routes>
  );
}
