import React from 'react';
import './styling.css';

// var what = "";
// var where = "";
// var previously = false;


class CreatePosts extends React.Component {
    render() {
        return(
        <div>
            <div class = "createheader">
            <h1>Create An Alert About A Natural Disaster</h1>
            </div>
            <div class ="createText1">
                <p><label for="what">Describe the Disaster:</label></p>
                <input type="text" id="what" name="what" class = "textbox" placeholder="Enter information about the disaster"></input>           
            </div>
            <div class = "createText2">
                <p><label for="where">Where Is The Natural Disaster: </label></p>
                <input type="text" id="where" name="where" class = "textbox" placeholder="Bhubaneswar, Odisha, India"></input>
            </div>
            <div class = "create_post"><a href="/social">
               Post
               </a>
            </div>
        </div>
        );
    }
}


export default CreatePosts;