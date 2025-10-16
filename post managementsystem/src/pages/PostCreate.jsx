import { v4 as uuidv4 } from "uuid";
import PostForm from "../components/PostForm";
import { useNavigate } from "react-router-dom";

export default function PostCreate({ posts, setPosts }) {
  const navigate = useNavigate();

  const handleCreate = (newPost) => {
    const now = new Date().toISOString();
    const post = {
      ...newPost,
      id: uuidv4(),
      tags: newPost.tags.split(",").map((t) => t.trim()),
      createdAt: now,
      updatedAt: now,
    };
    setPosts([...posts, post]);
    navigate("/");
  };

  return <PostForm initialPost={{ title: "", author: "", content: "", tags: "" }} onSubmit={handleCreate} />;
}
