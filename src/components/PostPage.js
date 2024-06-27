import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Missing from "./Missing";
import DataContext from "../context/DataContext";

const PostPage = () => {
  const { posts,handleDelete} = useContext(DataContext)
  const { id } = useParams();
  const post = posts.find((post) => (post.id).toString() === id);
  return (
    <div>
      {post ? (
        <div className="post">
          <header className="post-header">
            <h2>
              {post.title}
            </h2>
            <p className="post-meta">{`Published on ${post.dateTime}`}</p>
          </header>
          <div className="post-body">
            <p>{post.body}</p>
            <button onClick={()=>handleDelete(post.id)}>Delete</button>
            <Link to={`/EditPage/${id}`} className ="editBtn" >Edit</Link>
          </div>
        </div>
      ) : (
        <Missing />
      )}
    </div>
  );
};

export default PostPage;
