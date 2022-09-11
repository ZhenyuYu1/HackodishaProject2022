import React from 'react';
import flood from '../components/images/flood.jpg';
import earthquake from '../components/images/earthquake.jpg';
var previously = true;

class Social extends React.Component {
    
    render() {
        if (previously === true){
            return (
                <div>
                    <h1>
                        Alerts About Natural Disasters In Your Area:
                    </h1>
                    <div class="alert">
                        <div class="alertheader">
                            <p class = "alertwhat">
                                Flood Spotted
                            </p>
                            <p class = "alertwhere">
                                @ Location
                            </p>
                            <p class = "timestamp">
                                10/09/2022 17:49
                            </p>
                        </div>
                        <div class="alertimage">
                            <img src={flood} alt="flood_img"></img>
                        </div>
                    </div>
                    <div class="alert">
                        <div class="alertheadere">
                            <p class = "alertwhat">
                                Earthquake
                            </p>
                            <p class = "alertwhere">
                                @ Location
                            </p>
                            <p class = "timestamp">
                                10/09/2022 18:54
                            </p>
                        </div>
                        <div class="alertimage">
                            <img src={earthquake} alt="flood_img"></img>
                        </div>
                    </div>
                </div>
                
            );
        }
        else{
            return (
                <div>
                    <h1>
                        Social
                    </h1>
                </div>
            );
        }
    }
}

export default Social;