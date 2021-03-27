import React, { useEffect, useState }  from 'react'
import './Home.css'
import Video from '../Assets/3d_cube.mp4'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Aos from 'aos';
import 'aos/dist/aos.css' 
function Home() {

  useEffect(()=>{
  Aos.init()
  },[])

    return (
       <div className="mobile-view"  > 
         <div style={{flex:1, height:'100%', display:'flex',justifyContent:'center', flexDirection:'column'}}>
          <h2 data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000"  data-aos-delay="500" className="home-head">We are an  <span className="highlight">experience design studio</span></h2>
          <h2 data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="2000"  data-aos-delay="2000" className="home-head">aiming to bridge the gap between <span className="highlight">design and technology</span></h2>
          <h2 data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="3000"  data-aos-delay="3000" className="home-head">To create elevated <span className="highlight">live, content and digital experiences.</span></h2>
         </div>
         <div style={{flex:.7, height:'100%'}}>
          <Player
              autoplay
              loop
              src="https://assets8.lottiefiles.com/packages/lf20_ybrg8gup.json">
          </Player>
         </div>
       </div>
    )
}

export default Home