const PetController = require('../controllers/pet.controller');


module.exports = function(app){
    //get all route
    app.get('/api/pets', PetController.getAll);

    //create route
    app.post('/api/pets/create', PetController.createPet);

    //delete route
    app.delete('/api/pets/delete/:id', PetController.deletePet);

    //update route
    app.put('/api/pets/:id/', PetController.updatePet);

    //get one route
    app.get('/api/pets/:id/', PetController.getOnePet);
}