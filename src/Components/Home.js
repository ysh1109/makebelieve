import React,{useEffect,useState} from 'react'
import './Home.css'
import Video from '../Assets/3d_cube.mp4'
function Home() {


  const [h1txt,setH1txt] = useState(false)
  const [h2txt,setH2txt] = useState(false)
  const [h3txt,setH3txt] = useState(false)
  const [scroll,setScroll] = useState(0)

  var scrollValue = 0;



  useEffect(()=>{
  window.addEventListener('scroll',handleScroll)
  //  window.addEventListener('scroll',testing)
   return () =>{
   window.removeEventListener('scroll', handleScroll)
   }
  },[])

 
  const handleScroll = (e) => {


   if(Number(window.pageYOffset)>scrollValue) {
      console.log("scroll down")
      scrollValue = Number(window.pageYOffset)
      setScroll(scrollValue)
      let vid = document.getElementById('video');
      vid.play();
      let upper = 20;
      let lower = 2;
      var intv = upper - lower;
      intv = Math.floor(1000 * (lower + intv * Math.random()));
      setTimeout(function(){
        if(Number(window.pageYOffset)<4100){
          vid.pause();
        }
        else {
          vid.play()
        }
           
      }, intv);

      let x = document.getElementById("headerOne")
      let y = document.getElementById("headerTwo")
      let z = document.getElementById("headerThree")

    console.log(window.pageYOffset)
    if(Number(window.pageYOffset)>200) {
      setH1txt(true)
      
      x?.classList.add('head-first-fold-ani')
      
    
    }
    if(Number(window.pageYOffset)>2500) {
      setH2txt(true)

      y?.classList.add('head-second-fold-ani')
    }
    if(Number(window.pageYOffset)>4000) {
      setH3txt(true)

      z?.classList.add('head-third-fold-ani')
    }
    
    
    }
    if (Number(window.pageYOffset) < scrollValue) {
      console.log("scroll up")
      scrollValue = Number(window.pageYOffset)
      setScroll(scrollValue)
    }
   

 
} 

    return (
        <div className="home_container" >
            <div className="home_body">
            <div  className="banner">
              <video id="video"   src={Video} type="video/mp4" />
            </div>
            {/* <TestList/> */}
           

          <div className="container-fluid" style={{position:'fixed'}}>
            <div className="row">
              <div className="col-md-9">
                <div className="exp-design-studio">
                 {h1txt?<h1 id="headerOne" className="head-first-fold">We are an <span className="head-first-fold-highlight">experience design studio</span></h1>:<div></div>}
                {h2txt?<h1 id="headerTwo" className="head-second-fold">aiming to bridge the gap between <span className="head-second-fold-highlight">design and technology</span></h1>:<></>}
              {h3txt?<h1 id="headerThree" className="head-third-fold">To create elevated <span className="head-third-fold-highlight">live, content and digital experiences.</span></h1>:<></>}
                  
                  </div>
                  <div className="exp-design-studio-s">
            </div>
            <div className="exp-design-studio-t">
          </div>
              </div>
              <div className="col-md-3"> </div>
            </div>
             
          </div>
      
      </div>
      </div>
      
    )
}

export default Home