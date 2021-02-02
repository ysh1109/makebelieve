import React, {useEffect} from 'react'
import { Card } from 'react-bootstrap'
import Card1 from './Card1'
import './Work.css'
function Work() {
    useEffect(() => {
      
      Card()

    }, [])
    const Card = ()=>{
        const cards = document.querySelectorAll('.card-wrapper-fp');

        for (let i = 0; i < cards.length; i++) {
            const card = cards[i];
            card.addEventListener('mousemove', cardRotate);
            card.addEventListener('mouseleave', resetCard);
        }
        
        function cardRotate(e) {
            const card = this.querySelector('.card-fp');
            let center = {
                y: card.offsetHeight/2,
                x: card.offsetWidth/2
            }
            console.log(e.offsetX);
            card.style.transform = `rotateX(${(-e.offsetY + center.y)/8}deg) rotateY(${(e.offsetX - center.x)/8}deg)`;
        }
        
        function resetCard(e) {
            const card = this.querySelector('.card-fp');
            card.style.transform = `rotate(0)`;
        }
    }
    return (
    <div>
        <div className="reel-top"></div>
        <section className="show-reel">
        <div className="overlay-wcs"></div>
        <div className="container video-div h-100">
      <div className="d-flex h-100 text-center align-items-center">
        <div className="w-100 text-white">
          <h1>MAKE BELIEVE</h1>
          <p className="lead mb-0">aiming to bridge the gap between design and technology</p>
        </div>
      </div>
    </div>
        </section>
        <section className="feayured-projects-block">
        <div className="container-fluid">
        <div className="heading-featured-projects">
            <h1 className="heading-featured-projects-txt">featured projects</h1>
          </div>
          <br></br>
            <div style={{justifyContent:'center'}} className="row">
            
               < Card1></ Card1>
               < Card1></ Card1>
               < Card1></ Card1>
               < Card1></ Card1>
               
                
            </div>
            
        </div>

        </section>
    </div>
    )
}



export default Work