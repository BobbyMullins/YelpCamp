var mongoose = require('mongoose'); 
var Campground = require("./models/campground"); 
var Comment = require("./models/comment"); 

var data = [
        {
            name: "Salmon Creek",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz6SazfMcNBwNGOakwwHR4IPZ0rFokMA_jJUMX5CdW8__LL1l5",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus, nisl ac vestibulum tempus, dolor eros porttitor dolor, at maximus nisi ligula in dui. Fusce nec sapien tellus. Cras at viverra massa, ac lobortis purus. Mauris sed nulla in lacus fermentum tempor mollis quis turpis. Vestibulum eget lacinia felis. Morbi mollis, lectus vel tempus dignissim, diam dui lacinia arcu, et scelerisque nibh mi sit amet velit. Nulla ac metus velit. Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent venenatis mi et mi dapibus finibus ut sit amet tortor."
        },
        {
            name: "Buffalo Cove",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwSe2ShpSyUEAwPU547v-GwQQRMfCHTZld9ZSi0v-_FVpQhJ5G", 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus, nisl ac vestibulum tempus, dolor eros porttitor dolor, at maximus nisi ligula in dui. Fusce nec sapien tellus. Cras at viverra massa, ac lobortis purus. Mauris sed nulla in lacus fermentum tempor mollis quis turpis. Vestibulum eget lacinia felis. Morbi mollis, lectus vel tempus dignissim, diam dui lacinia arcu, et scelerisque nibh mi sit amet velit. Nulla ac metus velit. Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent venenatis mi et mi dapibus finibus ut sit amet tortor."
        },
        {
            name: "Desert Oasis",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9nBMu9T-Qxff4GrylZLm63gHxN_JjncfJ5kA8zr4QdSz7ChcaQ",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus, nisl ac vestibulum tempus, dolor eros porttitor dolor, at maximus nisi ligula in dui. Fusce nec sapien tellus. Cras at viverra massa, ac lobortis purus. Mauris sed nulla in lacus fermentum tempor mollis quis turpis. Vestibulum eget lacinia felis. Morbi mollis, lectus vel tempus dignissim, diam dui lacinia arcu, et scelerisque nibh mi sit amet velit. Nulla ac metus velit. Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent venenatis mi et mi dapibus finibus ut sit amet tortor."
        }
    ]

function seedDB() {
    //Remove campgrounds 
    Campground.remove({}, function(err){
        /*if (err) {
            console.log(err)
        } else {
            console.log("removed campground");    
        }
        
        //Add campgrounds 
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if (err) {
                    console.log(err); 
                } else {
                    console.log("added a campground"); 
                    //Add a comment
                    Comment.create(
                        {
                            text: "Pretty nice, but I wish there was internet", 
                            author: "Homer"
                        }, function (err, comment){
                            if(err) {
                                console.log(err); 
                            }else {
                                campground.comments.push(comment); 
                                campground.save(); 
                                console.log("created a new comment"); 
                            }
                        }); 
                }
            });
        });
     */
    }); 
     
}

module.exports = seedDB; 

 