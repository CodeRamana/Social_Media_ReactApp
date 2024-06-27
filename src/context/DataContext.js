import React from "react";
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import api from "../API/post";
import useWindowSize from "../hooks/useWindowSize";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { width } = useWindowSize();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/posts");
        setPosts(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(err.message);
          setFetchError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    };
        setTimeout(() => {
            fetchPosts();
        }, 1000);
  }, []);

  useEffect(() => {
    const result = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.body.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResult(result.reverse());
  }, [posts, search]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;

    const newPost = {
      id,
      title,
      dateTime: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
      body,
    };

    try {
      const response = await api.post("/posts", newPost);
      const newPosts = [...posts, response.data];
      setPosts(newPosts);
      setTitle("");
      setBody("");
      navigate("/");
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(err.message);
        setFetchError(err.message);
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const remainPosts = posts.filter((post) => post.id !== id);
      setPosts(remainPosts);
      navigate("/");
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(err.message);
        setFetchError(err.message);
      }
    }
  };

  const handleEdit = async (id) => {
    //alert(`/posts/${id}`)
    const updatePost = {
      id,
      title: editTitle,
      dateTime: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
      body: editBody,
    };
    try {
      const response = await api.patch(`/posts/${id}`, updatePost);
      const updatedPosts = posts.map((post) =>
        post.id === id ? { ...response.data } : post
      );
      console.log(updatedPosts);
      setPosts(updatedPosts);
      setEditTitle("");
      setEditBody("");
      navigate("/");
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(err.message);
        setFetchError(err.message);
      }
    }
  };

  return (
    <DataContext.Provider
      value={{
        posts,
        width,
        search,
        setSearch,
        searchResult,
        title,
        setTitle,
        body,
        setBody,
        handleSubmit,
        handleDelete,
        handleEdit,
        setEditTitle,
        setEditBody,
        editTitle,
        editBody,
        fetchError,
        isLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
