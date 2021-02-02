import React from 'react'
import './Home.css'
function Home() {
    return (
        <div className="home_container">
        <section>
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
  </section>
      </div>
      
    )
}

export default Home