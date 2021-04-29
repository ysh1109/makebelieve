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
  const [screenWidth,setScreenWidth] = React.useState(window.innerWidth)

  const screenResize =()=>{
    console.log('render',window.innerWidth)
    setScreenWidth(window.innerWidth)
  }
  React.useEffect(()=>{
    window.addEventListener('resize',screenResize)

    return ()=>{
      window.removeEventListener('resize',screenResize)
    }
  },[])
    return (
      <div style={{}}>
       <div className="mobile-view"  > 
         <div style={{flex:1, height:'100%', display:'flex',justifyContent:screenWidth<995?'flex-start':'center', flexDirection:'column'}}>
          <h2 data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000"  data-aos-delay="500" className="home-head">We are an  <span className="highlight">experience design studio</span></h2>
          <h2 data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1500"  data-aos-delay="1000" className="home-head">aiming to bridge the gap between <span className="highlight">design and technology</span></h2>
          <h2 data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="2000"  data-aos-delay="2000" className="home-head">To create elevated <span className="highlight">live, content and digital experiences.</span></h2>
         </div>
         <div className="home_lottie" style={{flex:.7, height:'100%'}}>
          <Player
              autoplay
              loop
              style={{height:500}}
              src="https://assets8.lottiefiles.com/packages/lf20_ybrg8gup.json">
          </Player>
         </div>
         
       </div>
        <section>
        <div className="container-fluid">
        <p className="copyright">© <span className="Digit-style">2021</span> gently altered | all rights reserved</p>
        </div>
    </section>
    </div>
    )
}

export default Home