import "./App.css";
import AppRouter from "./appRouter/AppRouter";
import { AuthContextProvider } from "./contexts/AuthContext";
import { BlogContextProvider } from "./contexts/BlogContext";
function App() {
  return (
    <AuthContextProvider>
      <BlogContextProvider>
        <AppRouter />
      </BlogContextProvider>
    </AuthContextProvider>
  );
}

export default App;
