import React from 'react'
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios'
import PetForm from '../components/PetForm';

const UpdatePage = () => {
    const {id}=useParams();
    const [pet, setPet]=useState("");

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${id}`)
        .then(res=>{
            setPet(res.data)
        })
        .catch(err=>console.log(err))
    },[])

    return (
        <div>
            <Link to={'/'}>Home</Link>
            <h2>Edit {pet.name}</h2>
            <PetForm pet={pet} id={id}/>
        </div>
    )
}

export default UpdatePage