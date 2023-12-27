import axios from 'axios';
import React,{useState} from 'react'
import {useNavigate} from "react-router-dom"

function Add() {
  const navigate = useNavigate()

  const [book,setBook] = useState({
    title:"",
    desc:"",
    price:null
  })

  const handleChange = (e)=>{
    setBook(prev=>({...prev,[e.target.name]:e.target.value}));
  }

  const handleClick = async e =>{
     e.preventDefault()
    try {
        await axios.post("http://localhost:4000/addbook",book)
        navigate('/')
    } catch (error) {
        console.log("error : ",error)
    }
  }

    
  return (
    <div>
        <h1>Add new book</h1>
        <input onChange={handleChange} type='text' placeholder='title' name='title' /><br/>
        <input onChange={handleChange} type='text' placeholder='desc' name="desc" /><br/>
        <input onChange={handleChange} type='number' placeholder='price' name='price' /><br/>
        <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Add