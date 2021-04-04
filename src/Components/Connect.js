import React, { useEffect, useState }  from 'react'
import './Connect.css'
import { Form, Button } from 'react-bootstrap';
import db from '../firebase.js';
import scrollTop from '../Assets/scrollTop.svg'
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
                    <div className="row">
                        <div class="col-sm-12 col-md-12 col-lg-1 col-xl-1"></div>
                        <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <section className="address-div">
                                <div className="box-address">
                                <p className="address"> <span className="highlight">address:</span> gently altered <span className="Digit-style">201</span>, kshitij, veera desai road, andheri (w), mumbai - <span className="Digit-style">400058</span> </p>
                                </div>
                            </section>
                            <br></br>
                            <Form onSubmit={submitDetails}>
                                <Form.Group>
                                    <input className="input-style" type="text" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                                </Form.Group>

                                <Form.Group >
                                    <input className="input-style" type="email" value={email}  placeholder="email"
                                    onChange={(e)=>setEmail(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group>
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
                        <div class="col-sm-12 col-md-12 col-lg-1 col-xl-1"></div>
                        <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6"></div>
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