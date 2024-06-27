import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    
      <div className="card">
      <div className="card-header">
        <Link to={`/PostPage/${post.id}`} className="my-custom-anchor"><h2>{post.title}</h2></Link>
        <p>{post.dateTime}</p>
      </div>
      <div className="card-body">
        <p>{post.body}</p>
      </div>
    </div>
    
    
  );
};

export default Post;
