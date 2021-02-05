import React, {useEffect,useState} from 'react'
import { Card , Button, ResponsiveEmbed} from 'react-bootstrap'
import './Work.css'
import db from '../firebase.js';
import Card1 from './Card1'
import { isElement } from 'react-dom/test-utils';
import Modal from 'react-modal';
function Work() {
  
  const [cardList,setCardList]  = useState([]);
  const [show,setShow] = useState(false)
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
  const customStyles = {
    content : {
      height : '90vh',
      width: '90vw',
      zIndex: 3,
backgroundColor: '#000',
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
    
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
            <div style={{justifyContent:'space-evenly'}}  variant="primary" onClick={() => setShow(true)} className="row">
            
              {cardList.map((item,key)=>(
                 < Card1 id={item.id} title={item.title} service={item.service} image={item.image}/>
              ))}
              
           
               
                
            </div>
            
        </div>

        </section>
        <Modal
          isOpen={show}
          // onAfterOpen={afterOpenModal}
          onRequestClose={()=>setShow(false)}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
            <div className="style-btn">
            {/* <button className="btn-close" >close</button> */}
            <div onClick={()=>setShow(false)} class="outer">
  <div class="inner">
    <label>close</label>
  </div>
</div>
            </div>
          
          {/* <div>I am a modal</div> */}
                  <div style={{marginTop:30}}></div>
          <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-xl-6 col-lg-6">
                  <div>
                  <div className="m-b" style={{ width: '100%', height: 'auto' }}>
  <ResponsiveEmbed aspectRatio="16by9">
    {/* <embed type="video" src="https://youtu.be/l9ZO_m7v5j8" /> */}
    <iframe  src="https://www.youtube.com/embed/l9ZO_m7v5j8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </ResponsiveEmbed>
</div>
                  </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-xl-6 col-lg-6">
              <div>
                <h1 className="title">bacardi</h1>
                <h4 className="service-name">(live)</h4>
                <br></br>
                <p className="para">We maintain that accessibility is a key component of any modern web application. As such, we have created this modal in such a way
                </p>
              </div>
              </div>
          </div>
        </Modal>
    </div>
    )
}



export default Work