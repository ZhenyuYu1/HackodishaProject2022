import React from 'react';

class Location extends React.Component {
    render() {
        return (
        <div class = "locationpage">
          <div class = "row">
            <div class = "column">
              <h1 class = "continent">Asia</h1>
            <p>
            <a href = './disastersOdisha'>
              <button class = "locationButton">
              Odisha
              </button>
              </a>
            </p>
            </div>
            <div class = "column">
            <h1 class = "continent">North America</h1>
            <p>
              <button class = "locationButton">
                California
              </button>
            </p>
            </div>
            <div class = "column">
            <h1 class = "continent">Europe</h1>
            <p>
              <button class = "locationButton">
                London
              </button>
            </p>
            </div>
            <div class = "column">
            <h1 class = "continent">Africa</h1>
            <p>
              <button class = "locationButton">
                Cairo
              </button>
            </p>
            </div>
            <div class = "column">
            <h1 class = "continent">Australia</h1>
            <p>
              <button class = "locationButton">
                Melbourne
              </button>
            </p>
            </div>
            <div class = "column">
            <h1 class = "continent">South America</h1>
            <p>
              <button class = "locationButton">
                Buenos Aires
              </button>
            </p>
            </div>
          </div>

        </div>
        );
    }
}

export default Location;