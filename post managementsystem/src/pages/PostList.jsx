import { useState } from "react";
import PostCard from "../components/PostCard";

export default function PostList({ posts }) {
  const [query, setQuery] = useState("");

  const filtered = posts.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-4">
      <input
        placeholder="Search by title..."
        className="border p-2 mb-4 w-full"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="grid gap-4">
        {filtered.length > 0 ? (
          filtered.map((p) => <PostCard key={p.id} post={p} />)
        ) : (
          <p>No posts found</p>
        )}
      </div>
    </div>
  );
}
