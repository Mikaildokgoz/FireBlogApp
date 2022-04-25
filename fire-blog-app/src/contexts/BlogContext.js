import { db } from "../helpers/firebase";
import { useState, useEffect, createContext, useContext } from "react";
import {
  ref,
  set,
  push,
  onValue,
  remove,
  update,
} from "firebase/database";
import { AuthContext } from "./AuthContext";
import loading from "../assets/spinner.gif"

export const BlogContext = createContext();

export const BlogContextProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(false);

  const AddBlog = (posts) => {
    const blogRef = ref(db, "blogapp");
    const newBlogrRef = push(blogRef);

    set(newBlogrRef, {
      title: posts.title,
      url: posts.url,
      content: posts.content,
      user: currentUser.email,
      addDate: Date.now(),
      likeCount: 0,
      commnetCount: 0,
    });
  };

  const DeleteBlog = (id) => {  
    remove(ref(db, "blogapp/" + id));
  }

  const EditBlog = (posts) => {
    const updates = {};
    updates["blogapp/" + posts.id] = posts;
    return update(ref(db), updates)
  }

  const useFetch = () => {
    setLoading(true) 

    useEffect(() => {
      const blogRef = ref(db, "blogapp");
  
      onValue(blogRef, (snapshot) => {
        const data = snapshot.val();
        const blogappArray = [];
  
        for (let id in data) {
          blogappArray.push({ id, ...data[id] });
        }
        setBlog(blogappArray)  
        setLoading(false) 
      });
    }, [])
    return {blog, loading}
  }

  return (
    <BlogContext.Provider value={{blog, setBlog, AddBlog, DeleteBlog, EditBlog, useFetch, loading}}>
      {children}
    </BlogContext.Provider>
  )
};
