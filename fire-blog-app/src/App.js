import "./App.css";
import AppRouter from "./appRouter/AppRouter";
import { AuthContextProvider } from "./contexts/AuthContext";
import { BlogContextProvider } from "./contexts/BlogContext";
import {ToastContainer} from "react-toastify";

function App() {
  return (
    <AuthContextProvider>
      <BlogContextProvider>
        <AppRouter />
        <ToastContainer />
      </BlogContextProvider>
    </AuthContextProvider>
  );
}

export default App;
