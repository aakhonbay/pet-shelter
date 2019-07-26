var controller = require('./controller')
var path = require('path')


module.exports = function(app){
    app.get('/api/pets/:id', function(request, response){
        controller.getPet(request, response);
    })
    app.get('/api/pets', function(request, response){
        controller.getAlls(request, response);
    })
    app.post('/api/pets', function(request, response){
        controller.addPet(request, response);
    })
    app.patch('/api/pets/:id/like', function(request, response){
        controller.modifyLikes(request, response)
    })
    app.put('/api/pets/:id', function(request, response){
        controller.editPet(request, response);
    })
    app.delete('/api/pets/:id', function(request, response){
        controller.deletePet(request, response)
    })
    // app.delete('/item/:id/comment/:cid', function(request, response){
    //     controller.deleteComment(request, response)
    // })

    app.all("*", (request, response, next)=>{
        response.sendFile(path.resolve(__dirname+ "../../pet-shelter/dist/pet-shelter/index.html"))
    })

}