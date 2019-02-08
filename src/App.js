import React, { Component } from "react";
import "./App.css";
import music from "./image/music.PNG";
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    padding               : '0%'
  }
};

class App extends Component {
  state = {
    data: [],
    allData : [],
    modalIsOpen: false,
    currentVideo : ""
  };

  constructor() {
    super();
    this.closeModal = this.closeModal.bind(this);
  }
  closeModal() {
    this.setState({modalIsOpen: false});
    this.setState({currentVideo: ""});
  }
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    
  }
  openModal(url) {
    this.setState({currentVideo: url});
    this.setState({modalIsOpen: true});
  }
  componentWillMount() {
    this.setState({
      allData : [
        {
          category_name : "Latest Music ",
          category_icon : "https://cdn3.iconfinder.com/data/icons/social-media-circle-flat-1/1024/itunes-01-01-512.png",
          category_id : 1,
          category_icon_color : "black",
          video : [
            {
              video_image : "http://img.youtube.com/vi/98rEZwusWrY/0.jpg",
              video_name : "Nee Venakale Nadichi Music Video | Vijay Devarakonda | Malobika | Chinmayi | TrendMusic",
              video_album : "TrendMusic",
              video_icon : "fa fa-check-circle checkIcon",
              video_views : "5.5M Views",
              video_uploaded_time : "3 week ago",
              video_url : "https://www.youtube.com/embed/98rEZwusWrY",
              video_time : '0:43'

            },
            {
              video_image : "http://img.youtube.com/vi/_KhQT-LGb-4/0.jpg",
              video_name : "SIMMBA: Aankh Marey | Ranveer Singh, Sara Ali Khan | Tanishk Bagchi, Mika, Neha Kakkar, Kumar Sanu",
              video_album : "T-Series",
              video_icon : "fa fa-check-circle checkIcon",
              video_views : "96M Views",
              video_uploaded_time : "1 week ago",
              video_url : "https://www.youtube.com/embed/_KhQT-LGb-4",
              video_time : '3:23'

            },
            {
              video_image : "http://img.youtube.com/vi/ft4jcPSLJfY/0.jpg",
              video_name : "David Guetta, Bebe Rexha & J Balvin - Say My Name (Official Video)",
              video_album : "David Guetta",
              video_icon : "fa fa-music checkIcon",
              video_views : "87M Views",
              video_uploaded_time : "1 week ago",
              video_url : "https://www.youtube.com/embed/ft4jcPSLJfY",
              video_time : '3:30'

            },
            {
              video_image : "http://img.youtube.com/vi/eFsGA0GXB-8/0.jpg",
              video_name : "ZAYN - There You Are (Lyric Video)",
              video_album : "T-Series",
              video_icon : "fa fa-music checkIcon",
              video_views : "6.7M Views",
              video_uploaded_time : "1 month ago",
              video_url : "https://www.youtube.com/embed/eFsGA0GXB-8",
              video_time : '3:21'

            },
            {
              video_image : "http://img.youtube.com/vi/ft4jcPSLJfY/0.jpg",
              video_name : "David Guetta, Bebe Rexha & J Balvin - Say My Name (Official Video)",
              video_album : "David Guetta",
              video_icon : "fa fa-music checkIcon",
              video_views : "87M Views",
              video_uploaded_time : "1 week ago",
              video_url : "https://www.youtube.com/embed/ft4jcPSLJfY",
              video_time : '3:30'

            },
            {
              video_image : "http://img.youtube.com/vi/VQhIUzPJi8o/0.jpg",
              video_name : "Camila Cabello - Never Be The Same",
              video_album : "Camila Cabello",
              video_icon : "fa fa-music checkIcon",
              video_views : "10M Views",
              video_uploaded_time : "1 year ago",
              video_url : "https://www.youtube.com/embed/VQhIUzPJi8o",
              video_time : '5:33'

            },
            {
              video_image : "http://img.youtube.com/vi/73_OWzBr8Fo/0.jpg",
              video_name : "Camila Cabello - Made in Miami (Artist Spotlight Story)",
              video_album : "Camila Cabello",
              video_icon : "fa fa-music checkIcon",
              video_views : "2.2M Views",
              video_uploaded_time : "11 month ago",
              video_url : "https://www.youtube.com/embed/73_OWzBr8Fo",
              video_time : '17:03'

            },
            {
              video_image : "http://img.youtube.com/vi/MOP50VQBdCg/0.jpg",
              video_name : "Camila Cabello & Pharrell - Sangria Wine (Dance Challenge)",
              video_album : "Camila Cabello",
              video_icon : "fa fa-check-circle checkIcon",
              video_views : "96M",
              video_uploaded_time : "8 months ago",
              video_url : "https://www.youtube.com/embed/MOP50VQBdCg",
              video_time : '0:43'

            },
            {
              video_image : "http://img.youtube.com/vi/PWyZ24HS5aA/0.jpg",
              video_name : "Camila Cabello - THE RAP I PROMISED #WorthItVMA",
              video_album : "Camila Cabello",
              video_icon : "fa fa-music checkIcon",
              video_views : "3.6M Viees",
              video_uploaded_time : "3 years ago",
              video_url : "https://www.youtube.com/embed/PWyZ24HS5aA",
              video_time : '1:11'

            }
          ]
          
        },
        {
          category_name : "Trailer",
          category_icon : "https://pbs.twimg.com/profile_images/517326018177011712/XwrARxbO.png",
          category_id : 1,
          category_icon_color : "red",
          video : [
            {
              video_image : "http://img.youtube.com/vi/hA6hldpSTF8/0.jpg",
              video_name : "Marvel Studios' Avengers - Official Trailer",
              video_album : "Marvel Entertainment",
              video_icon : "fa fa-check-circle checkIcon",
              video_views : "86M Views",
              video_uploaded_time : "2 months ago",
              video_url : "https://www.youtube.com/embed/hA6hldpSTF8",
              video_time : '2:26'

            },
            {
              video_image : "http://img.youtube.com/vi/89sZ-x2Z5KU/0.jpg",
              video_name : "Antariksham 9000 KMPH Theatrical Trailer || Varun Tej, Aditi Rao, Lavanya Tripathi || Sankalp Reddy",
              video_album : "First Frame Entertainments",
              video_icon : "fa fa-check-circle checkIcon",
              video_views : "2.5M Views",
              video_uploaded_time : "3 months ago",
              video_url : "https://www.youtube.com/embed/89sZ-x2Z5KU",
              video_time : '0:43'

            },
             {
              video_image : "http://img.youtube.com/vi/bbMLUadeMnA/0.jpg",
              video_name : "Petta - Official Teaser | Superstar Rajinikanth | Sun Pictures | Karthik Subbaraj | Anirudh",
              video_album : "Sun TV",
              video_icon : "fa fa-check-circle checkIcon",
              video_views : "24M Views",
              video_uploaded_time : "1 month ago",
              video_url : "https://www.youtube.com/embed/hA6hldpSTF8",
              video_time : '2:30'

            },
            {
              video_image : "http://img.youtube.com/vi/hA6hldpSTF8/0.jpg",
              video_name : "Marvel Studios' Avengers - Official Trailer",
              video_album : "Marvel Entertainment",
              video_icon : "fa fa-check-circle checkIcon",
              video_views : "86M Views",
              video_uploaded_time : "2 months ago",
              video_url : "https://www.youtube.com/embed/hA6hldpSTF8",
              video_time : '2:26'

            }
          ]
          
        },
        {
          category_name : "Latest Movie ",
          category_icon : "http://icons.iconarchive.com/icons/jamespeng/movie/256/trailer-icon.png",
          category_id : 1,
          category_icon_color : "skyblue",
          video : [
            {
              video_image : "http://img.youtube.com/vi/hA6hldpSTF8/0.jpg",
              video_name : "Marvel Studios' Avengers - Official Trailer",
              video_album : "Marvel Entertainment",
              video_icon : "fa fa-check-circle checkIcon",
              video_views : "86M Views",
              video_uploaded_time : "2 months ago",
              video_url : "https://www.youtube.com/embed/hA6hldpSTF8",
              video_time : '2:26'

            },
            {
              video_image : "http://img.youtube.com/vi/89sZ-x2Z5KU/0.jpg",
              video_name : "Antariksham 9000 KMPH Theatrical Trailer || Varun Tej, Aditi Rao, Lavanya Tripathi || Sankalp Reddy",
              video_album : "First Frame Entertainments",
              video_icon : "fa fa-check-circle checkIcon",
              video_views : "2.5M Views",
              video_uploaded_time : "3 months ago",
              video_url : "https://www.youtube.com/embed/89sZ-x2Z5KU",
              video_time : '0:43'

            },
             {
              video_image : "http://img.youtube.com/vi/bbMLUadeMnA/0.jpg",
              video_name : "Petta - Official Teaser | Superstar Rajinikanth | Sun Pictures | Karthik Subbaraj | Anirudh",
              video_album : "Sun TV",
              video_icon : "fa fa-check-circle checkIcon",
              video_views : "24M Views",
              video_uploaded_time : "1 month ago",
              video_url : "https://www.youtube.com/embed/hA6hldpSTF8",
              video_time : '2:30'

            },
            {
              video_image : "http://img.youtube.com/vi/hA6hldpSTF8/0.jpg",
              video_name : "Marvel Studios' Avengers - Official Trailer",
              video_album : "Marvel Entertainment",
              video_icon : "fa fa-check-circle checkIcon",
              video_views : "86M Views",
              video_uploaded_time : "2 months ago",
              video_url : "https://www.youtube.com/embed/hA6hldpSTF8",
              video_time : '2:26'

            },
            {
              video_image : "http://img.youtube.com/vi/hA6hldpSTF8/0.jpg",
              video_name : "Marvel Studios' Avengers - Official Trailer",
              video_album : "Marvel Entertainment",
              video_icon : "fa fa-check-circle checkIcon",
              video_views : "86M Views",
              video_uploaded_time : "2 months ago",
              video_url : "https://www.youtube.com/embed/hA6hldpSTF8",
              video_time : '2:26'

            },
            {
              video_image : "http://img.youtube.com/vi/89sZ-x2Z5KU/0.jpg",
              video_name : "Antariksham 9000 KMPH Theatrical Trailer || Varun Tej, Aditi Rao, Lavanya Tripathi || Sankalp Reddy",
              video_album : "First Frame Entertainments",
              video_icon : "fa fa-check-circle checkIcon",
              video_views : "2.5M Views",
              video_uploaded_time : "3 months ago",
              video_url : "https://www.youtube.com/embed/89sZ-x2Z5KU",
              video_time : '0:43'

            },
             {
              video_image : "http://img.youtube.com/vi/bbMLUadeMnA/0.jpg",
              video_name : "Petta - Official Teaser | Superstar Rajinikanth | Sun Pictures | Karthik Subbaraj | Anirudh",
              video_album : "Sun TV",
              video_icon : "fa fa-check-circle checkIcon",
              video_views : "24M Views",
              video_uploaded_time : "1 month ago",
              video_url : "https://www.youtube.com/embed/hA6hldpSTF8",
              video_time : '2:30'

            },
            {
              video_image : "http://img.youtube.com/vi/hA6hldpSTF8/0.jpg",
              video_name : "Marvel Studios' Avengers - Official Trailer",
              video_album : "Marvel Entertainment",
              video_icon : "fa fa-check-circle checkIcon",
              video_views : "86M Views",
              video_uploaded_time : "2 months ago",
              video_url : "https://www.youtube.com/embed/hA6hldpSTF8",
              video_time : '2:26'

            }
          ]
          
        }
        

      ]
    })
  }
  displayAllData() {
    var temp = [];
    for (let i = 0; i < this.state.allData.length; i++) {
      temp.push(
        <div className="categoery">
              <img src={this.state.allData[i].category_icon} alt="asdf" style={{width:28,marginRight:10}}/>
              <div className="c_name" style={{color: this.state.allData[i].category_icon_color}}>{this.state.allData[i].category_name}</div>
            </div>
      );
            for(let j=0;j<this.state.allData[i].video.length;j++){
              temp.push(
        <div style={{ width: "20%", display: "inline-block" }} onClick={() => this.openModal(this.state.allData[i].video[j].video_url)}>
          <div className="image">
            <div style={{position:'relative'}}>
            <img
              style={{ width: "100%" }}
              src={this.state.allData[i].video[j].video_image}
              frameborder="0"
              allow=" gyroscope; picture-in-picture"
              alt="you"
            />
            <div className="videoTime">{this.state.allData[i].video[j].video_time}</div>
            </div>
            <div className="image-text">
              {this.state.allData[i].video[j].video_name}
            </div>
            <div className="album">
            { this.state.allData[i].video[j].video_album}
              <i className={this.state.allData[i].video[j].video_icon} aria-hidden="true" />
            </div>
            <div className="viewer">
              {this.state.allData[i].video[j].video_views} <i className="fa fa-circle dot" aria-hidden="true" /> {this.state.allData[i].video[j].video_uploaded_time}
            </div>
          </div>
          
        </div>
      );
            }
      //       console.log(tempOne)
      // temp.push(
      //   tempOne
      // );
    }
    return temp;
  }
  render() {
    return (
      <div className="mainDiv">
        <nav className="navHeader">
          <div className="menubar">
            <i className="fa fa-bars" aria-hidden="true" />
            <i className="fa fa-square" aria-hidden="true" />
            <span className="logo">LOGO</span>
            <i className="fa fa-angle-down" aria-hidden="true" />
            <i className="fa fa-globe" aria-hidden="true" />
            <i className="fa fa-bell-o" aria-hidden="true" />
            <i className="fa fa-search" aria-hidden="true" />
          </div>
        </nav>
        <div className="menubar">
          <div>
            {this.displayAllData()}
          </div>
        </div>
        <footer>
          <div className="footerBar">
            <i className="fa fa-square" aria-hidden="true" style={{fontSize:32}}/>
            <span className="logo rel_5">LOGO</span>
            <i className="fa fa-copyright rel_5" style={{marginLeft:10, fontSize:12}} aria-hidden="true"></i>
            <span className="rel_5" style={{fontSize:12}}>2017 Mobiotics. All right reserved.</span>
            <div className="rightMenu">
              <a>About</a>
              <a>Help</a>
              <a>Terms and Conditions</a>
              <a>Privacy Policy</a>
              <a>Support</a>
            </div>
          </div>

          <div className="footerBar" style={{borderTop: '2px solid lightgray'}}>
            <div style={{display:'inline-block'}}>
              <div style={{color:'gray', fontSize:12, marginBottom:10}}>Our Apps</div>
              <div>
                <img src="http://pluspng.com/img-png/download-on-app-store-png-click-the-qr-code-to-show-the-download-link-800.png" alt="" style={{width:100, display:'inline-block'}}/>
                <img src="https://www.google.com/intl/en/cast/about/static/images/download-badges/android-download.png" alt="" style={{width:100, display:'inline-block', marginLeft:10}}/>
              </div>
            </div>
            <div className="rightMenu" style={{marginTop: 10}}>
              <a>Connect With Us</a>
              <a><i class="fa fa-facebook" aria-hidden="true"></i></a>
              <a><i class="fa fa-pinterest-p" aria-hidden="true"></i></a>
              <a><i class="fa fa-twitter" aria-hidden="true"></i></a>
              <a><i class="fa fa-linkedin" aria-hidden="true"></i></a>
            </div>
          </div>
        </footer>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <iframe width="560" height="315" src={this.state.currentVideo} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
        </Modal>
      </div>
      
    );
  }
}

export default App;
