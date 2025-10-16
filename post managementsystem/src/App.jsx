import { useLocalStorage } from "./hooks/useLocalStorage";
import Header from "./components/Header";
import AppRoutes from "./routes";

export default function App() {
  const [posts, setPosts] = useLocalStorage("posts", []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <AppRoutes posts={posts} setPosts={setPosts} />
    </div>
  );
}
