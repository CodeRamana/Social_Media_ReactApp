import React, { useContext } from 'react'
import DataContext from '../context/DataContext'

const NewPost = () => {
 const {title,setTitle,body,setBody,handleSubmit} = useContext(DataContext)
  return (
    <form className='newPost' onSubmit={(e)=>handleSubmit(e)}>
     <label htmlFor="title">Title:</label>
      <input type="text" name="title" id="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
     <label htmlFor="post">Post:</label>
      <textarea name="post" rows={"5"} placeholder="Write your amazing content here" id="post" value={body} onChange={(e)=>setBody(e.target.value)} required></textarea>
      <button type="submit">Submit Post</button>
    </form>
  )
}

export default NewPost