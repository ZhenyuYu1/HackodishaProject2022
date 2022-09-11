import React from 'react';
import './styling.css';

class DisastersOdisha extends React.Component {
    render() {
        return (
        <div class="disasterspage">
        <style>
        </style>
            <div class = "header">
            <h>
                <b>Common Natural Disasters in Odisha</b>
            </h>
            </div>
            <div class = "disasterType">
                <div class ="cyclone">
                <p><a href='/preDisasters/#icyclones'>
                    Cyclones
                    </a>
                </p>
                </div>
            </div>
            <div class = "disasterType">
                <div class ='tsunami'>
                <p><a href='/preDisasters/#itsunamis'>
                    Tsunamis
                    </a>
                </p>
                </div>
            </div>

            <div class = "disasterType">
                <div class ='heatwave'>
                <p><a href='/preDisasters/#iheatwaves'>
                    Heat Waves
                    </a>
                </p>
                </div>
            </div>

            <div class = "disasterType">
                <div class ='landslide'>
                <p><a href='/preDisasters/#ilandslides'>
                    Landslides
                    </a>
                </p>
                </div>
            </div>

            <div class = "disasterType">
                <div class ='urbanflood'>
                <p><a href='/preDisasters/#iurbanfloods'>
                    Urban Floods
                    </a>
                </p>
                </div>
            </div>

            <div class = "disasterType">
                <div class ='flood'>
                <p><a href='/preDisasters/#ifloods'>
                    Floods
                    </a>
                </p>
                </div>
            </div>
            
            <div class = "disasterType">
                <div class ='earthquake'>
                <p><a href='/preDisasters/#iearthquakes'>
                    Earthquakes
                    </a>
                </p>
                </div>
            </div>

            <div class = "bottom">
                <p><a href='/createPost'>
                    Report Disaster
                    </a>
                </p>
            </div>
            <div class = "bottom">
                <p><a href='/social'>
                    Alerts About Disasters in Odisha
                    </a>
                </p>
            </div>
        </div>
        );
    }
};

export default DisastersOdisha;