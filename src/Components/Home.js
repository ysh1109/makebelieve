import React,{useEffect} from 'react'
import './Home.css'

import Video from '../Assets/3d_cube.mp4'
function Home() {

  
  useEffect(()=>{
   // window.addEventListener('scroll',handleScroll)
  },[])
  const handleScroll = () => {
    let vid = document.getElementById('video');
   vid.currentTime = window.pageYOffset/750;
   console.log('scrolling---->',window.pageYOffset)
  }
    return (
        <div className="home_container">
            <div className="home_body">
            <div  className="banner">
              <video id="video"   src={Video} type="video/mp4" />
            </div>
            {/* <TestList/> */}
        </div>

        {/* <section>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-9">
                <div className="exp-design-studio">
                  <h1 className="head-first-fold ">We are an <span className="head-first-fold-highlight">experience design studio</span></h1>
                  </div>
              </div>
              <div className="col-md-3"> </div>
            </div>
             
          </div>
      </section>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-9">
              <div className="exp-design-studio-s">
                <h1 className="head-second-fold">aiming to bridge the gap between <span className="head-second-fold-highlight">design and technology</span></h1>
            </div>
            </div>
            <div className="col-md-3"></div>
          </div>
           
        </div>
    </section>
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9">
            <div className="exp-design-studio-t">
              <h1 className="head-third-fold">To create elevated <span className="head-third-fold-highlight">live, content and digital experiences.</span></h1>
          </div>
          </div>
          <div className="col-md-3"></div>
        </div>
          
      </div>
  </section> */}
      </div>
      
    )
}

export default Home