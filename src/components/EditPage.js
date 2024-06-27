import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DataContext from '../context/DataContext'

const EditPage = () => {
  const {posts,handleEdit,setEditTitle,setEditBody,editTitle,editBody} = useContext(DataContext)
   const {id} = useParams()
   const post = posts.find((post)=>(post.id).toString() === id)
   useEffect(()=>{
    if(post){
      setEditBody(post.body)
      setEditTitle(post.title)
    }
   },[post,setEditBody,setEditTitle])
  return (
    <form className='newPost' onSubmit={(e)=>e.preventDefault()} >
    <label htmlFor="title">Title:</label>
     <input type="text" name="title" id="title" value={editTitle} onChange={(e)=>setEditTitle(e.target.value)}/>
    <label htmlFor="post">Post:</label>
     <textarea name="post" rows={"5"} placeholder="Write your amazing content here" id="post" value={editBody} onChange={(e)=>setEditBody(e.target.value)} required></textarea>
     <button type="submit" onClick={()=>handleEdit(id)}>Edit Post</button>
   </form>
  )
}

export default EditPage