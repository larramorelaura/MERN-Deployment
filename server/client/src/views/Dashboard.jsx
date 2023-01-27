import React, {useState, useEffect} from 'react'
import PetTable from '../components/PetTable';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [pets, setPets]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/pets')
        .then(res=>{
            console.log(res.data)
            setPets(res.data)
        })
        .catch(err=>console.log(err))
    },[])

    

    return (
        <div>
            <h3>These are pets looking for a good home</h3>
            <Link to={'/pets/new'}>Add a Pet</Link>
            <PetTable pets={pets}/>
        </div>
    )
}

export default Dashboard