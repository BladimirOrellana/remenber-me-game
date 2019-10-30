import React, {Component}from 'react';

class  Nav extends Component {



  
  render(){

    return (
      <div>
      <nav className=" fixed-top ">
        <div className="container-fluid nav-score">
          <div className="row">
            <div className="col">
              <p>Remenber me?</p>
            </div>
            <div className="col">
              <p id="message"></p>
            </div>
            
            <div className="col">
              <p > Score: <span  id="score"></span> | Top Score: <span  id="highestScore"></span></p>
            </div>
          </div>
        </div>
        </nav>
      </div>
    );
  }
 }


export default Nav;