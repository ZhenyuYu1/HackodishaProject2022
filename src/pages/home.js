import React from 'react';
class Home extends React.Component{
    render(){
        return(
        <div class = "aboutpage">
        <div class="text-box">
        <h1>Natural Disaster Mananger Assistant</h1>
        <p>Natural disasters occur numerous times every day around the world. Many lives can be saved by providing people with the tools and information needed to properly prepare for and act during a natural disaster. This app aims to do just that; it helps teach people about essential information and tasks in regard to preparing for a natural disaster. Additionally, it provides a social platform to which people can connect to see incoming natural disasters, or form communities to support each other and get through hardships. We hope that by using our App, we can save many lives by teaching people about natural disasters.</p>
        <a href="/location">
        <div class = "gotolocation">
            <p>
            Choose Your Location
            </p>
        </div>
        </a>
        </div>
        </div>
        );
    }
}

export default Home;