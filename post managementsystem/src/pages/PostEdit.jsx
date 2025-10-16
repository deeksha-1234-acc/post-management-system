import { useParams, useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";

export default function PostEdit({ posts, setPosts }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === id);

  const handleEdit = (updatedPost) => {
    const now = new Date().toISOString();
    const newList = posts.map((p) =>
      p.id === id ? { ...p, ...updatedPost, updatedAt: now } : p
    );
    setPosts(newList);
    navigate("/");
  };

  if (!post) return <p>Post not found</p>;

  return <PostForm initialPost={post} onSubmit={handleEdit} />;
}
