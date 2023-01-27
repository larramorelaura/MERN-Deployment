const { Pet} = require('../models/pet.model');

module.exports.getAll= (req,res)=>{
    Pet.find().collation({locale: "en"}).sort({type:1})
    .then(pets=>res.json(pets))
    .catch(err=>res.json(err))

}

module.exports.getOnePet =(req, res)=>{
    Pet.findById(req.params.id)
    .then(pet=>res.json(pet))
    .catch(err=>res.json(err))
}

// module.exports.createPet= (req, res) => {
//     const newPet=req.body;
//         Pet.create(newPet)
//         .then(pet=> res.json(pet))
//         .catch(err => res.status(400).json(err));
// }


module.exports.createPet= async(req, res) => {
    const newPet=req.body;
    const alreadySaved = await Pet.findOne({ name: req.body.name});
    if (alreadySaved!==null){
        return res.status(400).send({errors: {name: {name:"validatorError", message: "Pet is already up for adoption"}}})
    }
        Pet.create(newPet)
        .then(pet=> res.json(pet))
        .catch(err => res.status(400).json(err));
}


module.exports.deletePet =(req, res) => {
    Pet.deleteOne({_id: req.params.id})
    .then(deleteConfirm => res.json(deleteConfirm))
    .catch(err => res.json(err))
}



module.exports.updatePet=  (req,res)=>{
    Pet.findOneAndUpdate({_id: req.params.id,}, req.body, {new:true, runValidators:true})
    .then(updatedPet=>res.json(updatedPet))
    .catch(err=>res.status(400).json(err))
}