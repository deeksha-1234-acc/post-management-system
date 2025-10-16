import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{post.title}</h2>
      <p className="text-sm text-gray-600">By {post.author}</p>
      <p className="mt-2 text-gray-700">{post.content.slice(0, 100)}...</p>
      <div className="mt-3 flex gap-3">
        <Link to={`/posts/${post.id}`} className="text-blue-500">View</Link>
        <Link to={`/posts/${post.id}/edit`} className="text-green-500">Edit</Link>
      </div>
    </div>
  );
}
