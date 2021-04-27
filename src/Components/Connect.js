import React, { useEffect, useState }  from 'react'
import './Connect.css'
import { Form, Button } from 'react-bootstrap';
import db from '../firebase.js';
import scrollTop from '../Assets/scrollTop.svg'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
function Connect() {
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
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");

    const submitDetails = (e) => {
        e.preventDefault();

        if(name!=""&&email!=""&&message!=""){
            
            db.collection('enquiry').add({
                name:name,
                email:email,
                enquiry:message
            });

            setName('');
            setEmail('');
            setMessage('');
            alert('Query has been submitted successfully');
        }
        else {
            alert('enter all the details to submit your enquiry');
        }
    }
    return (
        <div className="scroll-to-top">
        {isVisible && 
        <div onClick={scrollToTop}>
          <img className="scroll-top" src={scrollTop} alt='Go to top'/>
        </div>}
            <section className="contact-us-block">
                <div className="container-fluid">
                  <div style={{}} className="form-lottie-container">

                  
                    <div className="row" style={{}}>
                                <div className="box-address">
                                <p className="address"> <span className="highlight">address:</span> gently altered <br></br> <span className="Digit-style">201</span>, kshitij, veera desai road, <br></br> andheri (w), mumbai - <span className="Digit-style">400058</span> </p>
                                </div>
                               <Form onSubmit={submitDetails}>
                                <Form.Group style={{marginTop:15}}>
                                    <input className="input-style" type="text" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                                </Form.Group>

                                <Form.Group style={{marginTop:15}} >
                                    <input className="input-style" type="email" value={email}  placeholder="email"
                                    onChange={(e)=>setEmail(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group style={{marginTop:15}}>
                                <input  className="input-style txt-area" value={message}  as="textarea" placeholder="message"
                                onChange={(e)=>setMessage(e.target.value)}
                                />
              
                            </Form.Group>
    
                            {/* <input type="text" value={name} onChange={e=>setName(e.target.value)}></input> */}
                            <div className="centre">
                            <Button  className="btn-connect" type="submit" >
                                    send
                                 </Button>
                                 </div>
                            </Form>
                          
                      </div>
                        <div style={{}}>
                          <Player
                            autoplay
                            loop
                            src="https://assets4.lottiefiles.com/packages/lf20_vy90wmws.json">
                        </Player>
                          </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container-fluid">
                <p className="copyright">© <span className="Digit-style">2021</span> gently altered | all rights reserved</p>
                </div>
            </section>
        </div>
    )
}

export default Connect