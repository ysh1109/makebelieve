import React, { useEffect, useState }  from 'react'
import { Card , Button, ResponsiveEmbed} from 'react-bootstrap'
import './Work.css'
import db from '../firebase.js';
import Card1 from './Card1'
import { isElement } from 'react-dom/test-utils';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import video from '../Assets/3d_cube.mp4'
import Modal from 'react-modal';
import scrollTop from '../Assets/scrollTop.svg'
import showReel from '../Assets/showReel.mp4'
import muted from '../Assets/mute.png'
import volume from '../Assets/volume.png'
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
  const [service,setService] = useState('')
  const [isImage,setIsImage] = useState('')
  const [projectLink,setProjectLink] = useState('');
  const [digital,setDigital] = useState([])
  const [live,setLive] = useState([])
  const [content,setContent] = useState([])
  const [viewAll,setViewAll] = useState([])
  const [projectLinkName,setProjectLinkName] = useState('');
  const [isMuted,setIsMuted] = useState(false)
  const [selectedItem,setSelectedItem] = useState('viewall')
  
    useEffect(() => {
    const retu =  fetchBlogs()

    }, [])
  
    const fetchBlogs=async()=>{
      try {
        const response=db.collection('works');
         const data=await response.get();
         const list = [];
      const digital = [];
      const live = [];
      const content = [];
      const viewall = []
      data.docs.forEach(item=>{
        const lstDoc = {idss:item.id,...item.data()}
        viewall.push(lstDoc);
        setViewAll([...viewall])
        setCardList([...viewall])
        if(lstDoc.service == "digital") {
          digital.push(lstDoc)
          setDigital([...digital])
         
        }
        if(lstDoc.service== "live") {
          live.push(lstDoc)
          setLive([...live])
         
        }
        if(lstDoc.service== "content") {
          content.push(lstDoc)
          setContent([...content])
        }
       })
       
      }
      catch (err) {
        console.log("respssssonse",err)
      }
      
      
  }

  const selectedList = (tabName) => {
    switch (tabName) {
      case 'digital' : {
          setCardList(digital)
          setSelectedItem('digital')
          break;
      }
      case 'live' : {
          setCardList(live)
          setSelectedItem('live')

          break;
      }
      case 'content' : {
        setCardList(content)
        setSelectedItem('content')

        break;
    }
    case 'viewall' : {
      setCardList(viewAll)
      setSelectedItem('viewall')

      break;
  }
     
  } 
  }
  const setModalData = (url,desc,title,image,showImage,servicee,projectLink,linkName) => {
    setVideoUrl(url)
    setDesc(desc)
    setTitle(title)
    setShow(true)
    setImage(image)
    setIsImage(showImage)
    setService(servicee)
    setProjectLink(projectLink)
    setProjectLinkName(linkName)
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
    

  const renderList = (data) => {
    return (
      data.map((item,key)=>(
        < Card1 id={item.id} title={item.title} service={item.service} image={item.image} setModalData={()=>setModalData(item.videourl,item.desc,item.title,item.image,item.isImage,item.service,item.projectlink,item.linkName)}/>
     ))
    )
    
  }
    return (
      <div className="scroll-to-top">
      {isVisible ?
      !show && <div onClick={scrollToTop}>
        <img className="scroll-top" src={scrollTop} alt='Go to top'/>
      </div>:""}
        <div className="reel-top"></div>
        <section className="show-reel">
        <div className="overlay-wcs"><video playsinline="playsinline" autoplay="autoplay" muted={isMuted} loop="loop">
          <source src={showReel} type="video/mp4"></source>
        </video>
        </div>
        <div className="work-muted" onClick={()=>setIsMuted(()=>!isMuted)}>
          <img src={isMuted?muted:volume} style={{height:'100%',width:'100%',objectFit:'contain'}}/>
        </div>
        </section>
        <section className="feayured-projects-block">
        <div className="container-fluid">
        <div className="heading-featured-projects">
            <h1 className="heading-featured-projects-txt">featured projects</h1>
          </div>
          <div  style={{display:'flex',justifyContent:'space-evenly',marginTop:60}}>
          <div className="tabbar" onClick={()=>{selectedList('live')}}>
              {selectedItem=='live'?
              <p className="zoom" style={{padding:10,fontWeight:'bold',color:"#0fff9b"}}>LIVE</p>:
              <p style={{padding:10,fontWeight:'bold',color:'white'}}>LIVE</p>
              }
              </div>
              <div className="tabbar" onClick={()=>{selectedList('content')}}>
              {selectedItem=='content'?
              <p className="zoom" style={{padding:10,fontWeight:'bold',color:"#0fff9b"}}>CONTENT</p>:
              <p style={{padding:10,fontWeight:'bold',color:'white'}}>CONTENT</p>
              }
               </div>
              <div className="tabbar" onClick={()=>{selectedList('digital')}}>
              {selectedItem=='digital'?
              <p className="zoom"  style={{padding:10,fontWeight:'bold',color:"#0fff9b"}}>DIGITAL</p>:
              <p style={{padding:10,fontWeight:'bold',color:'white'}}>DIGITAL</p>
              }
              </div>
              <div className="tabbar" onClick={()=>{selectedList('viewall')}}>
              {selectedItem=='viewall'?
              <p className="zoom" style={{padding:10,fontWeight:'bold',color:"#0fff9b"}}>VIEW ALL</p>:
              <p style={{padding:10,fontWeight:'bold',color:'white'}}>VIEW ALL</p>
              }
               </div>
          </div>
          <br></br>
            <div style={{justifyContent:'space-evenly',marginTop:15}}  variant="primary"  className="row">
            
             
              
           {renderList(cardList)}
               
                
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
                <h4 className="service-name">( {service} )</h4>
                <br></br>
                <h4 className="para-link"><a href={projectLink} target="_blank">{projectLinkName}</a></h4>
                <br></br>
                <p className="para">{desc[0]}
                </p>
                <p className="para">{desc[1]}
                </p>
                <p className="para">{desc[2]}
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