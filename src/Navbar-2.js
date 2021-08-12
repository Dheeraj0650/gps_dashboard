import React from 'react';
import Logo from './Logo';

function Navbar_2(){
return (<nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"white"}}>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#"><button type="button" className="nav-button">Current Projects</button> <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#bottom-section" ><button type="button" className="nav-button">SPOC</button></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#bottom-section" ><button type="button" className="nav-button">Imp Links</button></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#bottom-section" ><button type="button" className="nav-button">Social Team</button></a>
          </li>
        </ul>
      </div>
    </nav>);

}

export default Navbar_2;
