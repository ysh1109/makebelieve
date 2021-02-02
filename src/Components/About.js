import React from 'react'
import './About.css'
import live from '../Assets/SVG/live.svg'
import content from '../Assets/SVG/content.svg'
import client1 from '../Assets/website-logos/client-1.png'
import client2 from '../Assets/website-logos/client-2.png'
import client3 from '../Assets/website-logos/client-3.png'
import client4 from '../Assets/website-logos/client-4.png'
import client5 from '../Assets/website-logos/client-5.png'
import client6 from '../Assets/website-logos/client-6.png'
import client7 from '../Assets/website-logos/client-7-01.png'
import client8 from '../Assets/website-logos/client-8.png'
import client9 from '../Assets/website-logos/client-9.png'
import client10 from '../Assets/website-logos/client-10.png'
import client12 from '../Assets/website-logos/client-12.png'
import client13 from '../Assets/website-logos/client-13.png'
import client14 from '../Assets/website-logos/client-14.png'
import client15 from '../Assets/website-logos/client-15.png'
import client16 from '../Assets/website-logos/client-16.png'
import client17 from '../Assets/website-logos/client-17.png'
import client18 from '../Assets/website-logos/client-18-02.png'
import client19 from '../Assets/website-logos/client-19-02.png'
import client21 from '../Assets/website-logos/client-21.png'
import { Player, Controls } from '@lottiefiles/react-lottie-player';



function About() {
    return (
        <div>
        <section className="about-block">
        <div className="container-fluid">
        <div className="cube-3d">
          <Player
  autoplay
  loop
  src="https://assets5.lottiefiles.com/packages/lf20_eq24dpkf.json"
  style={{ height: '300px', width: '300px' }}
>
 
</Player>
          </div>
          <div className="about-para-txt">
            <p className="about-info"> We are a team of <span className="about-para-highlight">designers, engineers and curators</span> , <br></br> working together to create meaningful human interactions with <span className="about-para-highlight">art and technology.</span> </p>
          </div>
          
        </div>
      </section>
      <section className="services-block">
      <div className="container-fluid">
            <div className="services-head">
                <h1 className="services-head-txt">what we do</h1>
            </div>
            </div>
            <div className="row">
               <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
               <div className="service-1 new-border">
                <div className="card services-card">
                    <img src={live} className="img-fluid img-style"></img>
                    <br></br>
                    <a  className="Live-link-style btn-hover right">live</a>
                </div>
                <div className="service-live">
                        <p className="live-left-txt"> <span className="dot"></span> spatial design</p>
                        <p className="live-left-txt"> <span className="dot"></span>Interactive installations</p>
                        <p className="live-left-txt"><span className="dot"></span> Projection mapping</p>
                        <p className="live-left-txt"><span className="dot"></span> Live lighting and Visuals</p>
                      </div>
               </div>
               </div>
               <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
               <div className="service-2 new-border-s">
                      <div className="card services-card">
                      <img src={content} className="img-fluid img-style" alt=""></img>
                      <br></br>
                      <a className="content-link-style">content</a>
                      </div>
                      <div className="service-live">
                        <p className="live-left-txt">motion graphics</p>
                        <p className="live-left-txt">animation/vfx</p>
                        <p className="live-left-txt">sound design</p>
                      </div>
                  </div>
               </div>
               <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
               <div className="service-3 new-border-s">
                      <div className="card services-card">
                      <img src={content} className="img-fluid img-style" alt=""></img>
                      <br></br>
                      <a  className="digital-link-style">digital</a>
                      </div>
                      <div className="service-live">
                        <p className="live-left-txt">web/app development</p>
                        <p className="live-left-txt">game design</p>
                        <p className="live-left-txt">interactive media</p>
                      </div>
                  </div>
               </div>
            </div>
      </section>
      {/* client section starts */}
      <section className="clients-testimonials">
        <div className="container-fluid">
            <div className="services-head">
                <h1 className="services-head-txt">We have worked for</h1>
            </div>
            <div className="client-slider">
            <div className="client-slide-track">
                <div className="client-slide">
                <img src={client1} className="img-fluid" style={{width: 160, marginTop: 46}} alt="Makebelieve-matrix"></img>
                </div>
                <div className="client-slide">
                <img src={client2} className="img-fluid" style={{width: 201, marginTop: 19}} alt="Makebelieve-absolut"></img>
                </div>
                <div className="client-slide">
                <img src={client3} className="img-fluid" style={{width: 156}} alt="Makebelieve-adidas"></img>
                </div>
                <div className="client-slide">
                <img src={client4} className="img-fluid" style={{width: 186}} alt="Makebelieve-bacardi"></img>
                </div>
                <div className="client-slide">
                <img src={client5} className="img-fluid" style={{width: 130}} alt="Makebelieve-boiler-room"></img>
                </div>
                <div className="client-slide">
                <img src={client6} className="img-fluid" style={{width: 202, marginTop: 30}} alt="Makebelieve-budwiser"></img>
                </div>
                <div className="client-slide">
                <img src={client7} className="img-fluid" style={{width: 130}} alt="Makebelieve-cred"></img>
                </div>
                <div className="client-slide">
                <img src={client8} className="img-fluid" style={{width: 130}} alt="Makebelieve-cred"></img>
                </div>
                <div className="client-slide">
                <img src={client9} className="img-fluid" style={{width: 106, marginTop: 10}} alt="Makebelieve-gg"></img>
                </div>
                <div className="client-slide">
                <img src={client10} className="img-fluid" style={{width: 130}} alt="Makebelieve-jiosavan"></img>
                </div>
                <div className="client-slide">
                <img src={client1} className="img-fluid" style={{width: 160, marginTop: 46}} alt="Makebelieve-matrix"></img>
                </div>
                <div className="client-slide">
                <img src={client2} className="img-fluid" style={{width: 201, marginTop: 19}} alt="Makebelieve-absolut"></img>
                </div>
                <div className="client-slide">
                <img src={client3} className="img-fluid" style={{width: 156}} alt="Makebelieve-adidas"></img>
                </div>
                <div className="client-slide">
                <img src={client4} className="img-fluid" style={{width: 186}} alt="Makebelieve-bacardi"></img>
                </div>
                <div className="client-slide">
                <img src={client5} className="img-fluid" style={{width: 130}} alt="Makebelieve-boiler-room"></img>
                </div>
                <div className="client-slide">
                <img src={client6} className="img-fluid" style={{width: 202, marginTop: 30}} alt="Makebelieve-budwiser"></img>
                </div>
                <div className="client-slide">
                <img src={client7} className="img-fluid" style={{width: 130}} alt="Makebelieve-cred"></img>
                </div>
                <div className="client-slide">
                <img src={client8} className="img-fluid" style={{width: 130}} alt="Makebelieve-cred"></img>
                </div>
                <div className="client-slide">
                <img src={client9} className="img-fluid" style={{width: 106, marginTop: 10}} alt="Makebelieve-gg"></img>
                </div>
                <div className="client-slide">
                <img src={client10} className="img-fluid" style={{width: 130}} alt="Makebelieve-jiosavan"></img>
                </div>
                <div className="client-slide">
                <img src={client1} className="img-fluid" style={{width: 160, marginTop: 46}} alt="Makebelieve-matrix"></img>
                </div>
                <div className="client-slide">
                <img src={client2} className="img-fluid" style={{width: 201, marginTop: 19}} alt="Makebelieve-absolut"></img>
                </div>
                <div className="client-slide">
                <img src={client3} className="img-fluid" style={{width: 156}} alt="Makebelieve-adidas"></img>
                </div>
                <div className="client-slide">
                <img src={client4} className="img-fluid" style={{width: 186}} alt="Makebelieve-bacardi"></img>
                </div>
                <div className="client-slide">
                <img src={client5} className="img-fluid" style={{width: 130}} alt="Makebelieve-boiler-room"></img>
                </div>
                <div className="client-slide">
                <img src={client6} className="img-fluid" style={{width: 202, marginTop: 30}} alt="Makebelieve-budwiser"></img>
                </div>
                <div className="client-slide">
                <img src={client7} className="img-fluid" style={{width: 130}} alt="Makebelieve-cred"></img>
                </div>
                <div className="client-slide">
                <img src={client8} className="img-fluid" style={{width: 130}} alt="Makebelieve-cred"></img>
                </div>
                <div className="client-slide">
                <img src={client9} className="img-fluid" style={{width: 106, marginTop: 10}} alt="Makebelieve-gg"></img>
                </div>
                <div className="client-slide">
                <img src={client10} className="img-fluid" style={{width: 130}} alt="Makebelieve-jiosavan"></img>
                </div>
                <div className="client-slide">
                <img src={client1} className="img-fluid" style={{width: 160, marginTop: 46}} alt="Makebelieve-matrix"></img>
                </div>
                <div className="client-slide">
                <img src={client2} className="img-fluid" style={{width: 201, marginTop: 19}} alt="Makebelieve-absolut"></img>
                </div>
                <div className="client-slide">
                <img src={client3} className="img-fluid" style={{width: 156}} alt="Makebelieve-adidas"></img>
                </div>
                <div className="client-slide">
                <img src={client4} className="img-fluid" style={{width: 186}} alt="Makebelieve-bacardi"></img>
                </div>
                <div className="client-slide">
                <img src={client5} className="img-fluid" style={{width: 130}} alt="Makebelieve-boiler-room"></img>
                </div>
                <div className="client-slide">
                <img src={client6} className="img-fluid" style={{width: 202, marginTop: 30}} alt="Makebelieve-budwiser"></img>
                </div>
                <div className="client-slide">
                <img src={client7} className="img-fluid" style={{width: 130}} alt="Makebelieve-cred"></img>
                </div>
                <div className="client-slide">
                <img src={client8} className="img-fluid" style={{width: 130}} alt="Makebelieve-cred"></img>
                </div>
                <div className="client-slide">
                <img src={client9} className="img-fluid" style={{width: 106, marginTop: 10}} alt="Makebelieve-gg"></img>
                </div>
                <div className="client-slide">
                <img src={client10} className="img-fluid" style={{width: 130}} alt="Makebelieve-jiosavan"></img>
                </div>
            </div>
            </div>
        </div>

        {/*  */}
        <div className="client-sliderr">
            <div className="client-slide-trackk">
                <div className="client-slidee">
                    <img src={client12} className="img-fluid" style={{width: 170, marginTop:22}} alt="Makebelieve-reliance"></img>
                    </div>
                    <div className="client-slidee">
                    <img src={client13} className="img-fluid" style={{width: 140, marginTop:58}} alt="Makebelieve-reliance"></img>
                    </div>
                    <div className="client-slidee">
                    <img src={client14} className="img-fluid" style={{width: 138}} alt="Makebelieve-reliance"></img>
                    </div>
                    <div className="client-slidee">
                    <img src={client15} className="img-fluid" style={{width: 145, marginTop:27}} alt="Makebelieve-reliance"></img>
                    </div>
                    <div className="client-slidee">
                    <img src={client16} className="img-fluid" style={{width: 144}} alt="Makebelieve-reliance"></img>
                    </div>
                    <div className="client-slidee">
                    <img src={client18} className="img-fluid" style={{width: 200, marginTop:38}} alt="Makebelieve-reliance"></img>
                    </div>
                    <div className="client-slidee">
                    <img src={client19} className="img-fluid" style={{width: 185, marginTop:31}} alt="Makebelieve-reliance"></img>
                    </div>
                    <div className="client-slidee">
                    <img src={client21} className="img-fluid" style={{width: 150, marginTop:22}} alt="Makebelieve-reliance"></img>
                    </div>
                    <div className="client-slidee">
                    <img src={client12} className="img-fluid" style={{width: 170, marginTop:22}} alt="Makebelieve-reliance"></img>
                    </div>
                    <div className="client-slidee">
                    <img src={client13} className="img-fluid" style={{width: 140, marginTop:58}} alt="Makebelieve-reliance"></img>
                    </div>
                    <div className="client-slidee">
                    <img src={client14} className="img-fluid" style={{width: 138}} alt="Makebelieve-reliance"></img>
                    </div>
                    <div className="client-slidee">
                    <img src={client15} className="img-fluid" style={{width: 145, marginTop:27}} alt="Makebelieve-reliance"></img>
                    </div>
                    <div className="client-slidee">
                    <img src={client16} className="img-fluid" style={{width: 144}} alt="Makebelieve-reliance"></img>
                    </div>
                    <div className="client-slidee">
                    <img src={client18} className="img-fluid" style={{width: 200, marginTop:38}} alt="Makebelieve-reliance"></img>
                    </div>
                    <div className="client-slidee">
                    <img src={client19} className="img-fluid" style={{width: 185, marginTop:31}} alt="Makebelieve-reliance"></img>
                    </div>
                    <div className="client-slidee">
                    <img src={client21} className="img-fluid" style={{width: 150, marginTop:22}} alt="Makebelieve-reliance"></img>
                    </div>
                    <div className="client-slidee">
                    <img src={client12} className="img-fluid" style={{width: 170, marginTop:22}} alt="Makebelieve-reliance"></img>
                    </div>
                    <div className="client-slidee">
                    <img src={client13} className="img-fluid" style={{width: 140, marginTop:58}} alt="Makebelieve-reliance"></img>
                    </div>
                    <div className="client-slidee">
                    <img src={client14} className="img-fluid" style={{width: 138}} alt="Makebelieve-reliance"></img>
                    </div>
                    <div className="client-slidee">
                    <img src={client15} className="img-fluid" style={{width: 145, marginTop:27}} alt="Makebelieve-reliance"></img>
                    </div>
                    <div className="client-slidee">
                    <img src={client16} className="img-fluid" style={{width: 144}} alt="Makebelieve-reliance"></img>
                    </div>
                    <div className="client-slidee">
                    <img src={client18} className="img-fluid" style={{width: 200, marginTop:38}} alt="Makebelieve-reliance"></img>
                    </div>
                    <div className="client-slidee">
                    <img src={client19} className="img-fluid" style={{width: 185, marginTop:31}} alt="Makebelieve-reliance"></img>
                    </div>
                    <div className="client-slidee">
                    <img src={client21} className="img-fluid" style={{width: 150, marginTop:22}} alt="Makebelieve-reliance"></img>
                    </div>
                    <div className="client-slidee">
                    <img src={client12} className="img-fluid" style={{width: 170, marginTop:22}} alt="Makebelieve-reliance"></img>
                    </div>
                    <div className="client-slidee">
                    <img src={client13} className="img-fluid" style={{width: 140, marginTop:58}} alt="Makebelieve-reliance"></img>
                    </div>
                    <div className="client-slidee">
                    <img src={client14} className="img-fluid" style={{width: 138}} alt="Makebelieve-reliance"></img>
                    </div>
                    <div className="client-slidee">
                    <img src={client15} className="img-fluid" style={{width: 145, marginTop:27}} alt="Makebelieve-reliance"></img>
                    </div>
                    <div className="client-slidee">
                    <img src={client16} className="img-fluid" style={{width: 144}} alt="Makebelieve-reliance"></img>
                    </div>
                    <div className="client-slidee">
                    <img src={client18} className="img-fluid" style={{width: 200, marginTop:38}} alt="Makebelieve-reliance"></img>
                    </div>
                    <div className="client-slidee">
                    <img src={client19} className="img-fluid" style={{width: 185, marginTop:31}} alt="Makebelieve-reliance"></img>
                    </div>
                    <div className="client-slidee">
                    <img src={client21} className="img-fluid" style={{width: 150, marginTop:22}} alt="Makebelieve-reliance"></img>
                    </div>

                    </div>
                    </div>
      </section>
      </div>
    )
}

export default About