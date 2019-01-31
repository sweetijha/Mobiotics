import React, { Component } from 'react';
import './App.css';
import music from './image/music.PNG'


class App extends Component {
  render() {
    return (
      <div>
      <nav class="navHeader">
          <div class="menubar">
            <i class="fa fa-bars" aria-hidden="true"></i>
            <i class="fa fa-square" aria-hidden="true"></i>
            <span class="logo">LOGO</span>
            <i class="fa fa-angle-down" aria-hidden="true"></i>
            <i class="fa fa-globe" aria-hidden="true"></i>
            <i class="fa fa-bell-o" aria-hidden="true"></i>
            <i class="fa fa-search" aria-hidden="true"></i>
            </div>
        </nav>
            <div class="menubar">
              <div style={{width:'20%'}}>
                <div className="categoery">
                <div>
                <img src={music} alt="asdf"/>
                <div>Latest Music Video</div>
                </div>
                
                </div>
                <div class="image">
                  <iframe style={{width:'100%'}} src="https://www.youtube.com/embed/wFMuNRs5bDk" frameborder="0" allow=" gyroscope; picture-in-picture" title="you"></iframe>
                  <div class="image-text">SIMMBA: Aankh Marey Lyrical | Ranveer Singh, Sara Ali Khan | Tanishk Bagchi,Neha Kakkar, Kumar Sanu
                  </div>
                  <div class="album">
                    T-Series<i class="fa fa-check-circle checkIcon" aria-hidden="true"></i>
                  </div>
                  <div class="viewer">
                    96M views <i class="fa fa-circle dot" aria-hidden="true"></i> 1 week ago
                  </div>
                </div>
              </div>
            </div>
        </div>
      
    );
  }
}

export default App;
