import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PetForm = (props) => {
    
    const navigate= useNavigate();
    const [errors, setErrors] =useState([])
    const [name, setName]=useState("");
    const [type, setType]=useState("");
    const [description, setDescription]=useState("");
    const [skillOne, setSkillOne]=useState("");
    const [skillTwo, setSkillTwo]=useState("");
    const [skillThree, setSkillThree]=useState("");
    
    
    
    useEffect(()=>{
        props.id&&
        axios.get(`http://localhost:8000/api/pets/${props.id}`)
        .then(res=>{
            setName(res.data.name)
            setType(res.data.type)
            setDescription(res.data.description)
            setSkillOne(res.data.skillOne)
            setSkillTwo(res.data.skillTwo)
            setSkillThree(res.data.skillThree)
        })
        .catch(err=>console.log(err))
    },[])
    
    

    const updatePet=()=>{
        axios.put(`http://localhost:8000/api/pets/${props.id}`, {name, type, description, skillOne, skillTwo, skillThree})
        .then(res=>{
            console.log(res.data);
            navigate(`/pets/${props.pet._id}`)
            
        })
        .catch(err=>{
            
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            console.log(errorResponse)
            const errorMsgs = []; // Define a temp error array to push the messages in
            
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorMsgs.push(errorResponse[key].message)
            }
            console.log(errorMsgs)
            // Set Errors
            setErrors(errorMsgs);
            console.log(errors)
        })
        
    }

    const createPet=()=>{
        axios.post('http://localhost:8000/api/pets/create', {name, type, description, skillOne, skillTwo, skillThree})
        .then(res=>{
            console.log(res.data);
            navigate('/')
            
        })
        .catch(err=>{
            console.log(err)
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            console.log(errorResponse)
            const errorMsgs = []; // Define a temp error array to push the messages in
            
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                console.log(key)
                errorMsgs.push(errorResponse[key].message)
            }
            console.log(errorMsgs)
            // Set Errors
            setErrors(errorMsgs);
            console.log(errors)
        })
        
    }
    

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(props.id)
        props.id?
        updatePet():
        createPet();
    }

    return (
        <div>
            {
                errors&&
                    errors.map((error,i)=>(
                        <p className="text-danger" key={i}>{error}</p>
                    ))
            }
            <form className=" border border-dark form d-flex gap-5 p-3" onSubmit={handleSubmit}>
                <div>
                    <h4>About this pet:</h4>
                    <div className="mt-3">
                        <label>Pet Name:</label>
                        <input type='text' name="petName"  onChange={(e)=>setName(e.target.value)} value={name} />
                    </div>
                    <div className="mt-3">
                        <label>Pet Type:</label>
                        <input type='text' name="petType" value={type} onChange={(e)=>setType(e.target.value)}  />
                    </div >
                    <div className="my-3">
                        <label>Pet Description:</label>
                        <input type='text' name="petDescription" value={description} onChange={(e)=>setDescription(e.target.value)}  />
                    </div>
                </div>
                <div>
                    <h4>Skills(optional):</h4>
                    <div className="mt-3">
                        <label>Skill 1:</label>
                        <input type='text' name="skillOne" value={skillOne} onChange={(e)=>setSkillOne(e.target.value)} />
                    </div>
                    <div className="mt-3">
                        <label>Skill 2:</label>
                        <input type='text' name="skillTwo"  value={ skillTwo} onChange={(e)=>setSkillTwo(e.target.value)} />
                    </div>
                    <div className="my-3">
                        <label>Skill 3:</label>
                        <input type='text' name="skillThree"  value={skillThree} onChange={(e)=>setSkillThree(e.target.value)} />
                    </div>
                    
                    <input className="btn btn-primary" type="submit" value="Submit"/>
                </div>
                
            </form>
        </div>
    )
}

export default PetForm