import { useState } from "react";
import { validatePost } from "../utils/validators";

export default function PostForm({ initialPost, onSubmit }) {
  const [post, setPost] = useState(initialPost);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validatePost(post);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      onSubmit(post);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto p-4">
      <div>
        <label className="block font-medium">Title</label>
        <input
          type="text"
          name="title"
          value={post.title}
          onChange={handleChange}
          className="border rounded w-full p-2"
        />
        {errors.title && <p className="text-red-500">{errors.title}</p>}
      </div>

      <div>
        <label className="block font-medium">Author</label>
        <input
          type="text"
          name="author"
          value={post.author}
          onChange={handleChange}
          className="border rounded w-full p-2"
        />
        {errors.author && <p className="text-red-500">{errors.author}</p>}
      </div>

      <div>
        <label className="block font-medium">Content</label>
        <textarea
          name="content"
          rows="5"
          value={post.content}
          onChange={handleChange}
          className="border rounded w-full p-2"
        />
        {errors.content && <p className="text-red-500">{errors.content}</p>}
      </div>

      <div>
        <label className="block font-medium">Tags (comma separated)</label>
        <input
          type="text"
          name="tags"
          value={post.tags}
          onChange={handleChange}
          className="border rounded w-full p-2"
        />
      </div>

      <button className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
    </form>
  );
}
