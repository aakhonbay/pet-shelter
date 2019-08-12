var mongoose = require('mongoose')
// call the ITEM model
var Pet = mongoose.model("Pet")
// var Review = mongoose.model("Review")

module.exports = {
    getAlls : function(request, response){
        Pet.find({}, function(error, items){
            if(error){
                response.json({ServerMessage: "Error", Error: error})
            }else{
                response.json({ServerMessage: "Success", Items: items})
            }
        })
    },
    addPet : function(request, response){
        // if(!request.body.pets){
        //     response.json({ServerMessage: "Error", Error:"New Movie must have a review"})
        // } else{
            Pet.create(request.body, function(error, item){
                if(error | !item){
                    console.log(item)
                    response.status(400).json({ServerMessage: "Error", Error: error})
                }else{
                    response.json({ServerMessage: "Success", Items: item})
                }
            })
            // .catch(
            //     error => {
            //         response.status(400).json({ServerMessage: "Error", Error: error})
            //     }
            // )
        // }
    },
    getPet: function(request, response){
        Pet.findOne({_id: request.params.id}, function(error, item){
            if(error){
                response.json({ServerMessage: "Error", Error: error})
            }else{
                response.json({ServerMessage: "Success", Items: item})
            }
        })
    },
    
    editPet: function(request, response){
        Pet.findOneAndUpdate({_id: request.params.id}, request.body, {runValidators: true}, function(error){

        }).then(
            res => {
                response.json({ServerMessage: "Success"})
            }
        )
        .catch(err => {
                response.json({ServerMessage: "Error", Error: err})
            })
    },
    deletePet: function(request, response){
        Pet.remove({_id: request.params.id}, function(error){
            if(error){
                response.json({ServerMessage: "Error", Error: error})
            }else{
                response.json({ServerMessage: "Success"})
            }
        })
    },
    modifyLikes: function(request, response){
        Pet.update({_id: request.params.id}, {
            rating: request.body.likes
        }, function(err, numberAffected, rawResponse) {
           console.log(err)
           console.log(numberAffected)
           console.log(rawResponse)
        })
    },
    // deleteComment: function(request, response){
    //     Review.remove({_id: request.params.cid}, function(error){
    //         if(error){
    //             response.json({ServerMessage: "Error", Error: error})
    //         }else{
    //             Movie.findOneAndUpdate({_id:request.params.id}, {$pull: {reviews:{_id:request.params.cid}}}, function(error, item){
    //                 if(error){
    //                     response.json({ServerMessage: "Error", Error: error})
    //                 }else{
    //                     response.json({ServerMessage: "Success", Item: item})
    //                 }
    //             })
    //         }
    //     })
    // }  

}