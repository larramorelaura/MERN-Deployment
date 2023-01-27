import React from 'react';
import {Link} from 'react-router-dom';

const PetTable = (props) => {
    



    return (
        <div>
            <table className="table table-striped table-success border border-dark" >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.pets.map((pet, i)=>
                            <tr key={i}>
                                <td>{pet.name}</td>
                                <td>{pet.type}</td>
                                <td>
                                    <Link to={`pets/${pet._id}`}>details</Link> 
                                    <span>|</span>
                                    <Link to={`pets/${pet._id}/edit`}>edit</Link>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default PetTable