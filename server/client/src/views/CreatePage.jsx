import React from 'react';
import {Link} from 'react-router-dom'
import PetForm from '../components/PetForm';

const CreatePage = () => {
    return (
        <div>
            <Link to={'/'}>Home</Link>
            <h2>Know a pet needing a home?</h2>
            <PetForm/>
        </div>
    )
}

export default CreatePage