import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'

const DetailsPage = () => {
    const {id}= useParams()
    const[pet, setPet]=useState("");
    const navigate= useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${id}`)
        .then(res=>{
            setPet(res.data)
        })
        .catch(err=>console.log(err))
    },[])

    const handleDelete=()=>{
        axios.delete(`http://localhost:8000/api/pets/delete/${id}`)
        .then(res=>{
            console.log(res.data)
            navigate('/')
        })
        .catch(err=>{console.log(err)})
    }

    // const handleLike=()=>{
    //     let likesCounter=document.getElementById(likesCounter);
        
    // }

    return (
        <div >
            <Link to={'/'}>Home</Link>
            <div className="d-flex justify-content-between my-4">
                <h2>Details about: {pet?.name}</h2>
                <button className="btn btn-success" onClick={handleDelete}>Adopt {pet.name}</button>
            </div>
            <div className="border border-dark p-3">
                <h5>Pet Type: {pet.type}</h5>
                <h5>Pet Description: {pet.description}</h5>
                
                
                <h5>Pet Skills:</h5>
                {pet.skillOne ? 
                    <ul>
                        <li>{pet.skillOne}</li>
                        <li>{pet.skillTwo}</li>
                        <li>{pet.skillThree}</li>
                    </ul>:
                <p> All pets are good at love! </p>
                }
                {/* <div className="d-flex justify-content-around">
                    <button onClick={handleLike} className="btn btn-success">Like {pet.name}</button>
                    <p><span id="likesCounter">0</span> like(s)</p>
                </div> */}
            </div>
            
        </div>
    )
}

export default DetailsPage