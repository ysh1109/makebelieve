import React, {useEffect,useState} from 'react'
import { Card } from 'react-bootstrap'
import './Work.css'
import db from '../firebase.js';
export default function Card1(props) {




    
  
    useEffect(() => {
      
       
            // db.collection('works').onSnapshot(snapshot=>(
            //     setRooms(snapshot.docs.map(doc => (
            //         {
            //             id:doc.id,
            //             data:doc.data()
            //         }
            //     )))
            // ))
    
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
            //   console.log(e.offsetX);
              card.style.transform = `rotateX(${(-e.offsetY + center.y)/8}deg) rotateY(${(e.offsetX - center.x)/8}deg)`;
          }
          
          function resetCard(e) {
              const card = this.querySelector('.card-fp');
              card.style.transform = `rotate(0)`;
          }
      }
    return (
        <div>
            <div onClick={props.setModalData} className="col-sm-12 col-md-4 col-xl-4 col-lg-4">
                <div className="fp-none"  >
                    <div className="card-wrapper-fp" style={{marginBottom:30}}>
                    <div className="card-fp bg-img-1" style={{backgroundImage:`url(${props.image})`}}>
                    <br></br> <br></br> <br></br> <br></br>
                    <h1 className="fp-head"> {props.title}</h1>
                       <div className="service-digital">{props.service}</div>
                    </div> 
                    </div>
                </div>
                </div>
        </div>
    )
}

