import { useParams, Link, useNavigate } from "react-router-dom";

export default function PostView({ posts, setPosts }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === id);

  const handleDelete = () => {
    if (window.confirm("Delete this post?")) {
      setPosts(posts.filter((p) => p.id !== id));
      navigate("/");
    }
  };

  if (!post) return <p>Post not found</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="text-gray-600 mb-2">By {post.author}</p>
      <p className="text-gray-700">{post.content}</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {post.tags.map((t) => (
          <span key={t} className="bg-gray-200 px-2 py-1 rounded">{t}</span>
        ))}
      </div>
      <p className="text-xs text-gray-500 mt-3">
        Created: {new Date(post.createdAt).toLocaleString()}
      </p>
      <p className="text-xs text-gray-500">
        Updated: {new Date(post.updatedAt).toLocaleString()}
      </p>
      <div className="mt-4 flex gap-3">
        <Link to={`/posts/${post.id}/edit`} className="text-blue-500">Edit</Link>
        <button onClick={handleDelete} className="text-red-500">Delete</button>
        <Link to="/" className="text-gray-600">Back</Link>
      </div>
    </div>
  );
}
