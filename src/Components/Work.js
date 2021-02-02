import React, {useEffect,useState} from 'react'
import { Card } from 'react-bootstrap'
import './Work.css'
import db from '../firebase.js';
import Card1 from './Card1'
import { isElement } from 'react-dom/test-utils';
function Work() {

  const CardList = [
    {"id":1,"title":"bacardi nh7 weekender 2020","service":"digital"},
    {"id":2,"title":"nh7 weekender 2020","service":"digital"},
    {"id":3,"title":"bacardi nh7  2020","service":"digital"},
    {"id":4,"title":"2020","service":"digital"},
    {"id":5,"title":"bacardi nh7 weekender 2020","service":"digital"},
    {"id":6,"title":"2020","service":"digital"}
]
  
  const [cardList,setCardList]  = useState([]);

    useEffect(() => {
     fetchBlogs();

    }, [])
  
    const fetchBlogs=async()=>{
      const response=db.collection('works');
      const data=await response.get();
      const list = [];
      data.docs.forEach(item=>{
        const lstDoc = {idss:item.id,...item.data()}
        list.push(lstDoc)
        setCardList([...list])
       })


      console.log(data)
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
            
              {cardList.map((item,key)=>(
                 < Card1 id={item.id} title={item.title} service={item.service}/>
              ))}
              
           
               
                
            </div>
            
        </div>

        </section>
    </div>
    )
}



export default Work