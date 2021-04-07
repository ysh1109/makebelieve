import React, { useEffect, useState }  from 'react'
import { Card , Button, ResponsiveEmbed} from 'react-bootstrap'
import './Work.css'
import db from '../firebase.js';
import Card1 from './Card1'
import { isElement } from 'react-dom/test-utils';
import Modal from 'react-modal';
import scrollTop from '../Assets/scrollTop.svg'
function Work() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);
  
  const [cardList,setCardList]  = useState([]);
  const [title,setTitle] = useState('');
  const [show,setShow] = useState(false)
  const [videoUrl,setVideoUrl] = useState('');
  const [desc,setDesc] = useState('');
  const [image,setImage] = useState('');
  const [isImage,setIsImage] = useState('')
  
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

  const setModalData = (url,desc,title,image,showImage) => {
    setVideoUrl(url)
    setDesc(desc)
    setTitle(title)
    setShow(true)
    setImage(image)
    setIsImage(showImage)
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
      <div className="scroll-to-top">
      {isVisible && 
      <div onClick={scrollToTop}>
        <img className="scroll-top" src={scrollTop} alt='Go to top'/>
      </div>}
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
            <div style={{justifyContent:'space-evenly'}}  variant="primary"  className="row">
            
              {cardList.map((item,key)=>(
                 < Card1 id={item.id} title={item.title} service={item.service} image={item.image} setModalData={()=>setModalData(item.videourl,item.desc,item.title,item.image,item.isImage)}/>
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
             {isImage?<img src={image} style={{height:'100%',width:'100%',objectFit:'contain'}}/> :
              <iframe  src={videoUrl} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            }
            </ResponsiveEmbed>
          </div>
                            </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-xl-6 col-lg-6">
              <div>
                <h1 className="title">{title}</h1>
                <h4 className="service-name">(live)</h4>
                <br></br>
                <p className="para">{desc}
                </p>
              </div>
              </div>
          </div>
        </Modal>
        <section>
                <div className="container-fluid">
                <p className="copyright">© <span className="Digit-style">2021</span> gently altered | all rights reserved</p>
                </div>
            </section>
    </div>
    )
}



export default Work