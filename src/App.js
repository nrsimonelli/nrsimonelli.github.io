import React, { Component } from 'react';
import './App.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import FlashOnIcon from '@material-ui/icons/FlashOn';

class App extends Component {
  handleWidth = () => {
    this.setState({
      windowWidth: window.innerWidth,
    });
  };

  componentDidMount = () => {
    window.addEventListener('resize', this.handleWidth);
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.handleWidth);
  };

  state = {
    windowWidth: window.innerWidth,
  };

  render() {
    const navName =
      this.state.windowWidth > 500 ? (
        <div>NICK SIMONELLI</div>
      ) : this.state.windowWidth > 400 ? (
        <div>SIMONELLI</div>
      ) : (
        <FlashOnIcon />
      );

    return (
      <div className='root'>
        <div className='top'>
          <div className='top-sub'>
            {navName}
            <div>
              <a
                href='https://www.linkedin.com/in/nicholas-simonelli-6456a590/'
                target='blank'
              >
                <LinkedInIcon />
              </a>
              <a
                className='margin-20'
                href='https://github.com/nrsimonelli'
                target='blank'
              >
                <GitHubIcon />
              </a>
              <a
                className='margin-20'
                href='mailto:nrsimonelli@gmail.com'
              >
                <EmailIcon />
              </a>
            </div>
          </div>
        </div>
        <div className='page-one'>
          <div className='layer'>
            <div className='wide-l'>Full Stack Developer</div>
            <div className='profile-pic'></div>
            <div className='wide-r'>Movement Specialist</div>
          </div>
        </div>

        <div className='page-two'>
          <div className='layer-two' id='layer-two'>
            <div id='override' className='title page-title'>
              Portfolio
              {' & '}
              Projects
            </div>
            <div className='x project-card'>
              <div className='theme project-image'>
                <div className='solo-text title'>
                  <a
                    href='https://dark-magic.herokuapp.com'
                    target='blank'
                  >
                    Dynamic Themes
                  </a>
                </div>
              </div>
            </div>
            <div className='x project-card'>
              <div className='scythe project-image'>
                <div className='solo-text title'>
                  <a
                    href='https://heroic-winds.herokuapp.com/'
                    target='blank'
                  >
                    Hero Vision
                  </a>
                </div>
              </div>
            </div>
            <div className='x project-card'>
              <div className='solo project-image'>
                <div className='solo-text title'>
                  <a
                    href='https://enigmatic-stream-39267.herokuapp.com/'
                    target='blank'
                  >
                    Slow Coffee
                  </a>
                </div>
              </div>
            </div>
            <div className='x project-card'>
              <div className='group project-image'>
                <div className='solo-text title'>
                  <a
                    href='https://radiant-bastion-40198.herokuapp.com'
                    target='blank'
                  >
                    We Sparkle
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='page-three'>
          <div className='layer-two' id='layer-two'>
            <div id='override' className='three title-dark'>
              Likes &amp; Interests
            </div>
            <div className='box'>
              <div className='three text music'>
                <div className='card card-info'>
                  <a
                    href='https://www.youtube.com/watch?v=PTt_G1Ft3yA'
                    target='blank'
                  >
                    Discovery, Daft Punk
                  </a>
                </div>
              </div>
            </div>
            <div className='box'>
              <div className='three text music-2'>
                <div className='card card-info'>
                  <a
                    href='https://pitchfork.com/reviews/albums/11624-unknown-pleasurescloserstill/'
                    target='blank'
                  >
                    Unknown Pleasures, Joy Division
                  </a>
                </div>
              </div>
            </div>
            <div className='box'>
              <div className='three text thriller-2'>
                <div className='card card-info'>
                  <a
                    href='https://www.youtube.com/watch?v=iQXmlf3Sefg'
                    target='blank'
                  >
                    The Witch by Robert Eggers
                  </a>
                </div>
              </div>
            </div>
            <div className='box'>
              <div className='three text thriller'>
                <div className='card card-info'>
                  <a
                    href='https://www.youtube.com/watch?v=r98msNRZYUY'
                    target='blank'
                  >
                    Enemy by Denis Villeneuve
                  </a>
                </div>
              </div>
            </div>
            <div className='box'>
              <div className='three text book-2'>
                <div className='card card-info'>
                  <a
                    href='https://www.newyorker.com/books/page-turner/dune-endures'
                    target='blank'
                  >
                    Dune by Frank Herbert
                  </a>
                </div>
              </div>
            </div>
            <div className='box'>
              <div className='three text book'>
                <div className='card card-info'>
                  <a
                    href='http://www.harukimurakami.com/book/a-wild-sheep-chase'
                    target='blank'
                  >
                    A Wild Sheep Chase by Haruki Murakami
                  </a>
                </div>
              </div>
            </div>

            <div className='box'>
              <div className='three text game'>
                <div className='card card-info'>
                  <a
                    href='https://belovedpacifist.com/'
                    target='blank'
                  >
                    Scythe, The Board Game
                  </a>
                </div>
              </div>
            </div>
            <div className='box'>
              <div className='three text ulti'>
                <div className='card card-info'>
                  <a
                    href='https://www.subzeroultimate.com/'
                    target='blank'
                  >
                    Ultimate
                  </a>
                </div>
              </div>
            </div>
            <div className='box'>
              <div className='three text game-2'>
                <div className='card card-info'>
                  <a
                    href='https://www.youtube.com/watch?v=vBJDBtn2MbQ&amp;list=PLWLedd0Zw3c5RCXboUsPwHsZJlXB2CzCz&amp;index=6'
                    target='blank'
                  >
                    Dark Souls, Series
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='page-five'>
          <div className='footer'>
            <div className='fat-div'>contact me</div>
            <div className='icons'>
              <a
                href='https://www.linkedin.com/in/nicholas-simonelli-6456a590/'
                target='blank'
              >
                <LinkedInIcon className='link' />
              </a>
              <a href='https://github.com/nrsimonelli' target='blank'>
                <GitHubIcon className='link' />
              </a>
              <a href='mailto:nrsimonelli@gmail.com'>
                <EmailIcon className='link' />
              </a>
            </div>
          </div>
        </div>
      </div>
    ); // end return
  } // end return
} // end class

export default App;
