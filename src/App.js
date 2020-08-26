import React, { Component } from 'react';
import './App.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import FlashOnIcon from '@material-ui/icons/FlashOn';


class App extends Component {

  state = {
    sectorTwoImage: 0
  }


  componentDidMount() {
    this.interval = setInterval(() => this.changeBackground(), 10000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  changeBackground = () => {
    if(this.state.sectorTwoImage < 3) {
      this.setState({
        sectorTwoImage: this.state.sectorTwoImage +1,
      })
      console.log('state = ', this.state.sectorTwoImage)
    } 
    if(this.state.sectorTwoImage === 3) {
      this.setState({
        sectorTwoImage: 0,
      })
      console.log('state = ', this.state.sectorTwoImage)
    } 
    return console.log('the state was set:', this.state.sectorTwoImage);
  }

  render(){
    const sectorTwoImageList = [
      '/images/backhand.jpg',
      '/images/flick.jpg',
      '/images/catch.jpg',
    ]
    const imageString = `url('${sectorTwoImageList[this.state.sectorTwoImage]}')`

    return (
      <div className='root'>
        <div className='top'>
          <div className='top-sub left'><FlashOnIcon /></div>
          <div className='top-sub center'>NICHOLAS SIMONELLI</div>
          <div className='top-sub right'>
            <a href='https://www.linkedin.com/in/nicholas-simonelli-6456a590/' target='blank'>
              <LinkedInIcon className='link' />
            </a>
            <a href='https://github.com/nrsimonelli' target='blank'>
              <GitHubIcon className='link' />
            </a>
            <a href='mailto:nrsimonelli@gmail.com' >
              <EmailIcon className='link' />
            </a>
            
          </div>
        </div>
          <div className='sector one'>
            <div className='sector one layer'>
            
            <div>Full Stack Developer</div>
            <div>Movement Specialist</div>
  
            </div>
            
          </div>
          
          <div className='container'>
            <div className='sector two' style={{backgroundImage: imageString}}>
              <div className='two text title'><a href='https://www.youtube.com/watch?v=qsxNIW97RqA' target='blank'>Sub Zero</a></div>
              <div className='two text title'><a href='https://subzeroultimate.com' target='blank'>Minneapolis Ultimate Club</a></div>
            </div>
          </div>
  
          <div className='sector four pro-page'>
            <div className='four page-title'>Professional Portfolio</div>
            <div className='four title project-title'><a href='https://github.com/nrsimonelli' target='blank'>solo project</a></div>
            <div className='four title project-title'>group project</div>
            <div className='x project-card'>
              <div className='solo project-image'>
                <div className='solo-text title'><a href='https://enigmatic-stream-39267.herokuapp.com/' target='blank'>
                  Slow Coffee</a></div>
              </div>
            </div>
            <div className='x project-card'>
              <div className='group project-image'>
                <div className='group-text'></div>
              </div>
            </div>
            <div className='base'>
              
            </div>
          </div>
          
          <div className='sector three'>
            <div className='three title-dark'>Other Likes &amp; Interests</div>
            <div className='box'>
              <div className='three text music'>
                <div className='card card-info'><a href='https://www.youtube.com/watch?v=PTt_G1Ft3yA' target='blank'>Discovery, Daft Punk</a></div>
              </div>
            </div>
            <div className='box'>
              <div className='three text music-2'>
                <div className='card card-info'><a href='https://pitchfork.com/reviews/albums/11624-unknown-pleasurescloserstill/' target='blank'>Unknown Pleasures, Joy Division</a></div>
              </div>
            </div>
            <div className='box'>
              <div className='three text thriller-2'>
                <div className='card card-info'><a href='https://www.youtube.com/watch?v=iQXmlf3Sefg' target='blank'>The Witch by Robert Eggers</a></div>
              </div>
            </div>
            <div className='box'>
              <div className='three text thriller'>
              <div className='card card-info'><a href='https://www.youtube.com/watch?v=r98msNRZYUY' target='blank'>Enemy by Denis Villeneuve</a></div>
              </div>
            </div>
            <div className='box'>
              <div className='three text book-2'>
                <div className='card card-info'><a href='https://www.newyorker.com/books/page-turner/dune-endures' target='blank'>Dune by Frank Herbert</a></div>
              </div>
            </div>
            <div className='box'>
              <div className='three text book'>
                <div className='card card-info'><a href='http://www.harukimurakami.com/book/a-wild-sheep-chase' target='blank'>A Wild Sheep Chase by Haruki Murakami</a></div>
              </div>
            </div>
           
            <div className='box'>
              <div className='three text game'>
                <div className='card card-info'><a href='https://belovedpacifist.com/' target='blank'>Scythe, The Board Game</a></div>
              </div>
            </div>
            <div className='box'>
              <div className='three text game-2'>
                <div className='card card-info'><a href='https://www.youtube.com/watch?v=vBJDBtn2MbQ&amp;list=PLWLedd0Zw3c5RCXboUsPwHsZJlXB2CzCz&amp;index=6' target='blank'>Dark Souls, Series</a></div>
              </div>
            </div>
          </div>
          
          
          <div className='sector five'>
            <div className='fat-div'>contact me</div>
              <div className='icons'>
              <a href='https://www.linkedin.com/in/nicholas-simonelli-6456a590/' target='blank'>
                <LinkedInIcon className='link' />
              </a>
              <a href='https://github.com/nrsimonelli' target='blank'>
                <GitHubIcon className='link' />
              </a>
              <a href='mailto:nrsimonelli@gmail.com' >
                <EmailIcon className='link' />
              </a>
              </div>
            
  
          </div>
      </div>
    ); // end return
  } // end return 
} // end class

export default App;
