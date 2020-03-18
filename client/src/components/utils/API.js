import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
    savePhoto: function(photoData) {
    console.log(photoData)
    console.log("Photo saved");
    return axios.post("/api/photos/", photoData);
  },

  getPhotos: function(){
    console.log('getting photos')
    return (axios.get('/api/photos/')
    );
  },
  deletePhoto: function(id){
    return axios.delete('/api/photos/' + id)
  }
};  